import { useEffect, useRef, useState } from 'react';
import { useApp } from '../store.jsx';

const WORK = 25 * 60;
const SHORT = 5 * 60;
const LONG = 15 * 60;

function fmtPomo(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

export default function Pomodoro() {
  const { todayPomos, recordPomo, showToast } = useApp();
  const [phase, setPhase] = useState("work");           // work | short | long
  const [total, setTotal] = useState(WORK);
  const [left, setLeft] = useState(WORK);
  const [running, setRunning] = useState(false);
  const [doneInCycle, setDoneInCycle] = useState(0);    // số pomodoro đã xong trong chu kỳ
  const intervalRef = useRef(null);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const stop = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setRunning(false);
  };

  const startPhase = (p) => {
    stop();
    setPhase(p);
    const secs = p === "work" ? WORK : (p === "short" ? SHORT : LONG);
    setTotal(secs);
    setLeft(secs);
  };

  const reset = () => {
    stop();
    setLeft(total);
  };

  const toggle = () => {
    if (running) { stop(); return; }
    if (left <= 0) setLeft(total);
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setLeft(prev => {
        if (prev > 1) return prev - 1;
        stop();
        // Hết phiên: chuyển chu kỳ + ghi nhận
        if (phase === "work") {
          const n = doneInCycle + 1;
          setDoneInCycle(n);
          recordPomo();
          if (n % 4 === 0) { setPhase("long"); setTotal(LONG); setLeft(LONG); showToast("🍅 Xong 4 quả! Nghỉ dài 15 phút nhé."); }
          else { setPhase("short"); setTotal(SHORT); setLeft(SHORT); showToast("🍅 Hết giờ làm! Nghỉ ngắn 5 phút."); }
        } else {
          setPhase("work"); setTotal(WORK); setLeft(WORK);
          showToast("🔔 Hết giờ nghỉ! Bắt đầu phiên làm mới.");
        }
        return 0;
      });
    }, 1000);
  };

  const pct = total ? Math.round(left / total * 100) : 0;
  const R = 52, C = 2 * Math.PI * R;
  const label = phase === "work" ? "Làm việc" : (phase === "short" ? "Nghỉ ngắn" : "Nghỉ dài");
  const accent = phase === "work" ? "var(--done)" : "var(--highlight)";

  return (
    <div className="card">
      <div className="card-head">
        <span className="title">🍅 Pomodoro</span>
        <span className="pomo-today">Hôm nay · {todayPomos()} quả</span>
      </div>
      <div className="card-body" style={{ textAlign: "center" }}>
        <div className="pomo-ring" style={{ "--accent": accent }}>
          <svg viewBox="0 0 120 120" className="pomo-svg">
            <circle className="pomo-track" cx="60" cy="60" r={R} />
            <circle
              className="pomo-prog" cx="60" cy="60" r={R}
              strokeDasharray={C}
              strokeDashoffset={C * (1 - pct / 100)}
            />
          </svg>
          <div className="pomo-inner">
            <div className="pomo-label">{label}</div>
            <div className="pomo-display">{fmtPomo(left)}</div>
            <div className="pomo-cycle">{doneInCycle}/4 quả trong chu kỳ</div>
          </div>
        </div>
        <div className="pomo-phase-tabs">
          {[["work", "Làm"], ["short", "Nghỉ"], ["long", "Dài"]].map(([p, t]) => (
            <button
              key={p}
              className={"pomo-tab" + (phase === p ? " active" : "")}
              onClick={() => startPhase(p)}
            >{t}</button>
          ))}
        </div>
        <div className="pomo-controls">
          <button className={"pomo-btn start" + (running ? " pause" : "")} onClick={toggle}>
            {running ? "⏸ Tạm dừng" : (left > 0 && left < total ? "▶ Tiếp tục" : "▶ Bắt đầu")}
          </button>
          <button className="pomo-btn" onClick={reset}>↺ Đặt lại</button>
        </div>
      </div>
    </div>
  );
}
