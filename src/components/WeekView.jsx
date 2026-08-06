import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store.jsx';
import { getDiagram } from '../diagrams.js';

const estMap = { l1: "≈ 2 giờ · lý thuyết", l2: "≈ 2 giờ · thực hành", a: "≈ 1–2 giờ" };

function TimeBadge({ prefix }) {
  return (
    <span className="time-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
      {estMap[prefix] || ""}
    </span>
  );
}

function CheckItem({ k, text, checked, onChange }) {
  return (
    <div className={"check" + (checked ? " done" : "")}>
      <input type="checkbox" id={k} checked={checked} onChange={() => onChange(k)} />
      <label className="t" htmlFor={k}>{text}</label>
    </div>
  );
}

function LessonBlock({ w, prefix, les }) {
  const { state, toggleCheck } = useApp();
  if (!les) return null;
  const diagram = getDiagram(w.id, prefix, les);
  const checks = (les.checklist || []).map((c, i) => {
    const k = `w${w.id}${prefix}${i}`;
    return <CheckItem key={k} k={k} text={c} checked={!!state.checks[k]} onChange={toggleCheck} />;
  });
  return (
    <div className="lesson">
      <div className="l-head">{les.title}<TimeBadge prefix={prefix} /></div>
      <div className="l-meta">{les.meta}</div>
      {(les.theory || []).map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: t }} />)}
      {diagram ? <div dangerouslySetInnerHTML={{ __html: diagram }} /> : null}
      {les.concept ? <div className="concept">💡 {les.concept}</div> : null}
      {les.code ? <div className="code" dangerouslySetInnerHTML={{ __html: les.code }} /> : null}
      <div style={{ marginTop: 10 }}><b style={{ fontSize: 12.5 }}>Checklist thực hành</b></div>
      {checks.length ? checks : <p style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>Chưa có bước thực hành.</p>}
    </div>
  );
}

function SelfCheck({ w, q, i }) {
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState(null);
  const { touch } = useApp();
  const pick = (oi) => {
    if (answered) return;
    setAnswered(true);
    setChosen(oi);
    touch();
  };
  return (
    <div className="q">
      <div className="qt">{i + 1}. {q.q}</div>
      {q.opts.map((o, oi) => {
        let cls = "";
        if (answered) {
          if (oi === q.a) cls = " correct";
          else if (oi === chosen) cls = " wrong";
        }
        return <div key={oi} className={"opt" + cls} onClick={() => pick(oi)}>{o}</div>;
      })}
      <div className={"explain" + (answered ? " show" : "")}>{q.why}</div>
    </div>
  );
}

function QuizQuestion({ w, q, qi }) {
  const { answerQ } = useApp();
  const [answered, setAnswered] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [feynmanOpen, setFeynmanOpen] = useState(false);
  const [feynmanDone, setFeynmanDone] = useState(false);

  const pick = (oi) => {
    if (answered) return;
    setAnswered(true);
    setChosen(oi);
    answerQ(`q${w.id}-${qi}`, oi, q.a);
  };

  const toggleFeynman = () => {
    setFeynmanOpen(o => !o);
  };
  const revealFeynman = () => {
    setFeynmanOpen(false);
    setFeynmanDone(true);
  };

  return (
    <div className="q">
      <div className="qt">{qi + 1}. {q.q}</div>
      {!feynmanDone && (
        <button className="feynman-btn" onClick={toggleFeynman}>✍️ Giải thích trước</button>
      )}
      {feynmanOpen && (
        <div className="feynman-box open">
          <textarea placeholder="Viết lời giải thích của bạn bằng lời của mình trước khi xem đáp án..."></textarea>
          <button className="feynman-reveal" onClick={revealFeynman}>Xem đáp án</button>
        </div>
      )}
      {q.opts.map((o, oi) => {
        let cls = "";
        if (answered) {
          if (oi === q.a) cls = " correct";
          else if (oi === chosen) cls = " wrong";
        }
        return <div key={oi} className={"opt" + cls} onClick={() => pick(oi)}>{o}</div>;
      })}
      <div className={"explain" + (answered ? " show" : "")}>{q.why}</div>
    </div>
  );
}

export default function WeekView({ w }) {
  const { state, weekDone, weekDoneCount, weekTotalCount, toggleCheck, saveNote } = useApp();
  const done = weekDone(w);
  const dc = weekDoneCount(w), tc = weekTotalCount(w);
  const pct = tc ? Math.round(dc / tc * 100) : 0;

  const assignBlock = w.assignment ? (
    <div className="lesson">
      <div className="l-head">📝 {w.assignment.title}<TimeBadge prefix="a" /></div>
      <p>{w.assignment.desc}</p>
      {(w.assignment.checklist || []).map((c, i) => {
        const k = `w${w.id}a${i}`;
        return <CheckItem key={k} k={k} text={c} checked={!!state.checks[k]} onChange={toggleCheck} />;
      })}
    </div>
  ) : (w.isProjectWeek ? <div className="lesson"><div className="concept">🎓 Tuần đồ án — không có bài tập & quiz, toàn bộ thời gian làm đồ án.</div></div> : null);

  const selfBlock = (w.selfcheck && w.selfcheck.length) ? (
    <div className="lesson">
      <div className="l-head">❓ Câu hỏi tự kiểm tra (cuối tuần)</div>
      {w.selfcheck.map((q, i) => <SelfCheck key={i} w={w} q={q} i={i} />)}
    </div>
  ) : null;

  const quizBlock = (w.quiz && w.quiz.length) ? (
    <div className="card" style={{ marginTop: 18 }}>
      <div className="card-head"><span className="title">📊 Quiz tuần {w.id}</span></div>
      <div className="card-body">
        {w.quiz.map((q, qi) => <QuizQuestion key={qi} w={w} q={q} qi={qi} />)}
      </div>
    </div>
  ) : null;

  const links = (w.lesson1 || w.lesson2 || w.assignment) ? (
    <div className="card">
      <div className="card-head"><span className="title">🔗 Tài nguyên & liên kết</span></div>
      <div className="card-body">
        <div className="res">
          <a target="_blank" rel="noopener" href="https://colab.research.google.com/">Mở Google Colab mới</a>
          <a target="_blank" rel="noopener" href="https://scikit-learn.org/stable/user_guide.html">scikit-learn docs</a>
          <a target="_blank" rel="noopener" href="https://pandas.pydata.org/docs/">pandas docs</a>
          <a target="_blank" rel="noopener" href="https://numpy.org/doc/">NumPy docs</a>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: "var(--ink-soft)" }}>Gợi ý: tạo notebook mới trong Colab và thực hành từng bước theo checklist bên trên.</div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">
          <span className="week-tag">Tuần {w.id}{w.isProjectWeek ? ' · Đồ án' : ''}</span>
          <span className="week-tag mini">{pct}% hoàn thành</span>
        </div>
        <h1>{w.title}</h1>
        <div className="sub">{w.sub}</div>
      </header>

      <div className="progress-panel">
        <div className="progress-top"><span className="progress-label">Tiến độ tuần</span><span className="progress-num">{dc}/{tc}</span></div>
        <div className="progress-track"><div className="progress-fill" style={{ width: pct + "%" }}></div></div>
      </div>

      <div className="card">
        <div className="card-head"><span className="title">Bài học</span></div>
        <div className="card-body">
          <LessonBlock w={w} prefix="l1" les={w.lesson1} />
          <LessonBlock w={w} prefix="l2" les={w.lesson2} />
          {assignBlock}
          {selfBlock}
        </div>
      </div>

      {quizBlock}
      {links}

      <div className="card">
        <div className="card-head"><span className="title">📓 Ghi chú của bạn</span></div>
        <div className="card-body">
          <textarea
            className="note-area"
            placeholder="Viết ghi chú, thắc mắc, link bạn muốn nhớ ở tuần này..."
            defaultValue={state.notes['w' + w.id] || ''}
            onBlur={(e) => saveNote(w.id, e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
