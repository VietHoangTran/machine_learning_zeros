import { Link } from 'react-router-dom';
import { useApp } from '../store.jsx';
import { PROJECTS } from '../data.js';

export default function Projects() {
  const { state, toggleCheck } = useApp();
  const all = [];
  PROJECTS.forEach(p => { p.checklist.forEach((_, i) => all.push(`${p.week}-${i}`)); });
  const doneC = all.filter(k => state.checks[k]).length;
  const pct = all.length ? Math.round(doneC / all.length * 100) : 0;

  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">Bộ đếm milestone · 35% + 40%</div>
        <h1>Kho đồ án</h1>
        <div className="sub">Theo dõi 3 mini-project và đồ án cuối khóa. Điểm dành cho cách làm đúng đắn, không phải con số accuracy đẹp.</div>
      </header>
      <div className="card">
        <div className="card-body">
          <div className="progress-top"><span className="progress-label">Tiến độ đồ án</span><span className="progress-num">{pct}%</span></div>
          <div className="progress-track"><div className="progress-fill" style={{ width: pct + "%" }}></div></div>
        </div>
      </div>
      {PROJECTS.map(p => {
        const pdc = p.checklist.filter((_, i) => state.checks[`${p.week}-${i}`]).length;
        return (
          <div className="milestone" key={p.week}>
            <div className="m-head">
              <div className="m-title">{p.title}</div>
              <div className="m-body" style={{ padding: 0, fontSize: 12, color: "var(--ink-soft)" }}>
                <span className="week-tag mini">{p.weight}</span> {pdc}/{p.checklist.length}
              </div>
            </div>
            <div className="m-body">
              <p><b>Trọng tâm:</b> {p.focus}</p>
              <p>{p.desc}</p>
              {p.datasets && p.datasets.length ? (
                <>
                  <p style={{ margin: "8px 0 4px" }}><b>📦 Dataset gợi ý:</b></p>
                  <div className="res">
                    {p.datasets.map(d => <a key={d.url} target="_blank" rel="noopener" href={d.url}>{d.name}</a>)}
                  </div>
                </>
              ) : null}
              {p.checklist.map((c, i) => {
                const k = `${p.week}-${i}`;
                return (
                  <div className={"check" + (state.checks[k] ? " done" : "")} key={k}>
                    <input type="checkbox" id={k} checked={!!state.checks[k]} onChange={() => toggleCheck(k)} />
                    <label className="t" htmlFor={k}>{c}</label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
