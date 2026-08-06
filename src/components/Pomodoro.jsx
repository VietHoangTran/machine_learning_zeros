import { useEffect, useRef, useState } from 'react';
import { useApp } from '../store.jsx';

function fmtPomo(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

export default function Pomodoro() {
  const { showToast } = useApp();
  const [total, setTotal] = useState(25 * 60);
  const [left, setLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const stop = () => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    setRunning(false);
  };

  const setPomodoro = (min) => {
    stop();
    setTotal(min * 60);
    setLeft(min * 60);
  };

  const toggle = () => {
    if (running) { stop(); return; }
    if (left <= 0) setLeft(total);
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setLeft(prev => {
        if (prev <= 1) {
          stop();
          showToast("🍅 Hết giờ! Nghỉ ngơi nhé.");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const reset = () => {
    stop();
    setLeft(total);
  };

  return (
    <div className="card">
      <div className="card-head"><span className="title">🍅 Pomodoro</span></div>
      <div className="card-body">
        <div className="pomo-display">{fmtPomo(left)}</div>
        <div className="pomo-presets">
          {[25, 5, 15].map(min => (
            <button
              key={min}
              className={"pomo-preset" + (total === min * 60 ? " active" : "")}
              onClick={() => setPomodoro(min)}
            >{min} phút</button>
          ))}
        </div>
        <div className="pomo-controls">
          <button className="pomo-btn start" onClick={toggle}>
            {running ? "⏸ Tạm dừng" : (left > 0 && left < total ? "▶ Tiếp tục" : "▶ Bắt đầu")}
          </button>
          <button className="pomo-btn" onClick={reset}>↺ Đặt lại</button>
        </div>
      </div>
    </div>
  );
}
