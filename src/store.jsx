import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { WEEKS, GLOSSARY } from './data.js';

const SKEY = "ml-studyhub-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(SKEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { checks: {}, notes: {}, cards: {}, quizResults: {}, answers: {}, streak: { last: "", count: 0 }, pomos: {} };
}

/* Date helpers */
function todayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function addDaysStr(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, setState] = useState(loadState);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  const save = useCallback((next) => {
    setState(next);
    try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
  }, []);

  /* Streak: gọi mỗi khi có hoạt động học tập */
  const touch = useCallback(() => {
    setState(prev => {
      const t = todayStr();
      const s = prev.streak || { last: "", count: 0 };
      let count = s.count || 0;
      if (s.last !== t) {
        if (s.last === yesterdayStr()) count += 1;
        else count = 1;
      }
      const next = { ...prev, streak: { last: t, count } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
  }, []);

  const showToast = useCallback((msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }, []);

  /* Progress helpers */
  const weekChecks = useCallback((w) => {
    const list = [];
    if (w.lesson1) w.lesson1.checklist.forEach((_, i) => list.push(`w${w.id}l1${i}`));
    if (w.lesson2) w.lesson2.checklist.forEach((_, i) => list.push(`w${w.id}l2${i}`));
    if (w.assignment) w.assignment.checklist.forEach((_, i) => list.push(`w${w.id}a${i}`));
    return list;
  }, []);

  const weekDoneCount = useCallback((w) => weekChecks(w).filter(k => state.checks[k]).length, [state.checks, weekChecks]);
  const weekTotalCount = useCallback((w) => weekChecks(w).length, [weekChecks]);

  const allWeekKeys = useCallback(() => {
    let keys = [];
    WEEKS.forEach(w => { weekChecks(w).forEach(k => keys.push(k)); });
    return keys;
  }, [weekChecks]);

  const overallPct = useCallback(() => {
    const keys = allWeekKeys();
    if (!keys.length) return 0;
    const done = keys.filter(k => state.checks[k]).length;
    return Math.round(done / keys.length * 100);
  }, [state.checks, allWeekKeys]);

  const weekDone = useCallback((w) => {
    const t = weekTotalCount(w);
    return t > 0 && weekDoneCount(w) === t;
  }, [weekTotalCount, weekDoneCount]);

  /* Phân tích điểm yếu */
  const weakWeeks = useCallback(() => {
    const perWeek = {};
    WEEKS.forEach(w => {
      if (!w.quiz || !w.quiz.length) return;
      let correct = 0, total = 0;
      w.quiz.forEach((_, qi) => {
        const k = `q${w.id}-${qi}`;
        if (state.quizResults && state.quizResults[k] !== undefined) { total++; if (state.quizResults[k]) correct++; }
      });
      if (total) perWeek[w.id] = { correct, total, pct: Math.round(correct / total * 100) };
    });
    const exam = [];
    WEEKS.forEach(w => { if (w.quiz) w.quiz.forEach(() => exam.push(w.id)); });
    if (state.answers) {
      Object.keys(state.answers).forEach(i => {
        const wk = exam[parseInt(i, 10)];
        if (wk === undefined) return;
        const p = perWeek[wk] || { correct: 0, total: 0, pct: 0 };
        p.total++; if (state.answers[i]) p.correct++;
        p.pct = Math.round(p.correct / p.total * 100);
        perWeek[wk] = p;
      });
    }
    return WEEKS.filter(w => {
      const p = perWeek[w.id];
      return p && p.total > 0 && p.pct < 70;
    }).map(w => ({ w, p: perWeek[w.id] }));
  }, [state.quizResults, state.answers]);

  /* Gợi ý "Hôm nay làm gì" */
  const todaySuggestions = useCallback(() => {
    const items = [];
    const next = WEEKS.find(w => !weekDone(w));
    if (next) items.push({ icon: "📖", text: `Học tiếp <b>Tuần ${next.id} — ${next.title}</b>`, href: `#/week/${next.id}` });
    const dueCards = GLOSSARY.filter((_, i) => (state.cards[i] || { due: todayStr() }).due <= todayStr()).length;
    if (dueCards) items.push({ icon: "🃏", text: `Ôn <b>${dueCards}</b> flashcard đến hạn`, href: "#/flashcards" });
    const weak = weakWeeks();
    if (weak.length) items.push({ icon: "🎯", text: `Ôn lại <b>Tuần ${weak[0].w.id}</b> (điểm yếu)`, href: `#/week/${weak[0].w.id}` });
    if (!items.length) items.push({ icon: "🎉", text: "Hôm nay không còn việc bắt buộc — ôn cheatsheet hoặc làm đề thi tổng", href: "#/exam" });
    return items;
  }, [weekDone, state.cards, weakWeeks]);

  /* Actions */
  const toggleCheck = useCallback((key) => {
    setState(prev => {
      const next = { ...prev, checks: { ...prev.checks, [key]: !prev.checks[key] } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  const saveNote = useCallback((id, val) => {
    setState(prev => {
      const next = { ...prev, notes: { ...prev.notes, ['w' + id]: val } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  const answerQ = useCallback((containerId, chosen, correct) => {
    setState(prev => {
      const next = { ...prev, quizResults: { ...prev.quizResults, [containerId]: (chosen === correct) } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  const answerExam = useCallback((idx, chosen, correct) => {
    setState(prev => {
      if (prev.answers && prev.answers[idx] !== undefined) return prev; // đã trả lời
      const next = { ...prev, answers: { ...(prev.answers || {}), [idx]: (chosen === correct) } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  /* Pomodoro: ghi nhận một phiên 25' hoàn thành cho hôm nay (key = ngày) */
  const recordPomo = useCallback(() => {
    const t = todayStr();
    setState(prev => {
      const p = prev.pomos || {};
      const next = { ...prev, pomos: { ...p, [t]: (p[t] || 0) + 1 } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  const answerCard = useCallback((i, knew) => {
    setState(prev => {
      const cards = prev.cards || {};
      const cur = cards[i] || { box: 1, due: todayStr() };
      let nextCard;
      if (knew) {
        const nextBox = Math.min(5, cur.box + 1);
        const interval = [0, 2, 4, 8, 16][nextBox - 1] || 16;
        nextCard = { box: nextBox, due: addDaysStr(interval) };
      } else {
        nextCard = { box: 1, due: todayStr() };
      }
      const next = { ...prev, cards: { ...cards, [i]: nextCard } };
      try { localStorage.setItem(SKEY, JSON.stringify(next)); } catch (e) {}
      return next;
    });
    touch();
  }, [touch]);

  const value = {
    state, toast, showToast,
    todayStr, addDaysStr, yesterdayStr,
    weekChecks, weekDoneCount, weekTotalCount, allWeekKeys, overallPct, weekDone,
    weakWeeks, todaySuggestions,
    toggleCheck, saveNote, answerQ, answerExam, answerCard, recordPomo,
    todayPomos: () => (state.pomos || {})[todayStr()] || 0,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
