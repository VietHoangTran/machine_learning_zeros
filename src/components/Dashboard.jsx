import { Link } from 'react-router-dom';
import { useApp } from '../store.jsx';
import { WEEKS, COURSE } from '../data.js';
import Pomodoro from './Pomodoro.jsx';

export default function Dashboard() {
  const { state, overallPct, weekDone, weekDoneCount, weekTotalCount, allWeekKeys, weakWeeks, todaySuggestions } = useApp();

  const doneCount = overallPct();
  const next = WEEKS.find(w => !weekDone(w));

  const weekCards = WEEKS.map(w => {
    const done = weekDone(w);
    const dc = weekDoneCount(w), tc = weekTotalCount(w);
    const pct = tc ? Math.round(dc / tc * 100) : 0;
    const status = done ? 'Hoàn thành' : (tc ? `Đang học · ${dc}/${tc}` : 'Chưa bắt đầu');
    return (
      <Link key={w.id} className={"tl-item" + (done ? " done" : "")} to={`/week/${w.id}`}>
        <div className="tl-num">T{String(w.id).padStart(2, "0")}</div>
        <div className="tl-info">
          <div className="tl-title">{w.title} {w.isProjectWeek ? '· 🎓 Đồ án' : ''}</div>
          <div className="tl-sub">{w.sub}</div>
          <div className="tl-status">{status}</div>
        </div>
      </Link>
    );
  });

  const weak = weakWeeks();
  const keys = allWeekKeys();
  const doneSteps = keys.filter(k => state.checks[k]).length;

  return (
    <>
      <header>
        <div className="eyebrow">Trang tự học · {COURSE.duration}</div>
        <h1>{COURSE.name}</h1>
        <div className="sub">{COURSE.tagline}</div>
      </header>

      <div className="card progress-panel">
        <div className="card-body">
          <div className="progress-top">
            <span className="progress-label">Tiến độ toàn khóa</span>
            <span className="progress-num">{doneCount}%</span>
          </div>
          <div className="progress-track"><div className="progress-fill" style={{ width: doneCount + "%" }}></div></div>
          <div className="progress-meta">{doneSteps} / {keys.length} bước thực hành đã hoàn thành</div>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <span className="title">🔥 Hôm nay làm gì</span>
          <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>
            {state.streak && state.streak.count ? `${state.streak.count} ngày liên tiếp` : "Bắt đầu streak hôm nay!"}
          </span>
        </div>
        <div className="card-body">
          {todaySuggestions().map((s, i) => (
            <div className="res" style={{ margin: "0 0 8px" }} key={i}>
              <Link to={s.href.replace("#", "")} dangerouslySetInnerHTML={{ __html: `${s.icon} ${s.text} →` }} />
            </div>
          ))}
        </div>
      </div>

      {weak.length ? (
        <div className="card" style={{ borderColor: "var(--bad)" }}>
          <div className="card-head"><span className="title">🎯 Điểm yếu của bạn</span></div>
          <div className="card-body" style={{ fontSize: 12.5 }}>
            {weak.map(({ w, p }) => (
              <div className="res" style={{ margin: "0 0 8px" }} key={w.id}>
                <Link to={`/week/${w.id}`}>Tuần {w.id} — {w.title} · đúng {p.correct}/{p.total} ({p.pct}%) →</Link>
              </div>
            ))}
            <p style={{ margin: "8px 0 0", color: "var(--ink-soft)" }}>Ôn lại các tuần này để cải thiện điểm. Làm thêm quiz/đề thi để phân tích chính xác hơn.</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-head"><span className="title">🎯 Điểm yếu của bạn</span></div>
          <div className="card-body" style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>Làm quiz các tuần và đề thi cuối khóa để nhận phân tích điểm yếu tự động.</div>
        </div>
      )}

      <Pomodoro />

      {next ? (
        <>
          <div className="card">
            <div className="card-head"><span className="title">▶ Tiếp tục học — Tuần {next.id}</span></div>
            <div className="card-body" style={{ cursor: "pointer" }}>
              <Link to={`/week/${next.id}`}>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}><b style={{ fontFamily: "'Space Grotesk'" }}>{next.title}</b> — {next.sub}</p>
                <div className="res" style={{ marginTop: 10 }}><span>Vào học →</span></div>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-head"><span className="title">🎯 Kiểm tra cuối khóa</span></div>
            <div className="card-body">
              <p style={{ margin: "0 0 10px", fontSize: 12.5, color: "var(--ink-soft)" }}>Làm tổng hợp toàn bộ câu hỏi của 11 tuần, xem điểm ôn tập.</p>
              <div className="res"><Link to="/exam">Vào kiểm tra →</Link></div>
            </div>
          </div>
        </>
      ) : (
        <div className="card" style={{ borderColor: "var(--done)" }}>
          <div className="card-head"><span className="title">🏁 Chúc mừng! Bạn đã hoàn thành khóa học</span></div>
          <div className="card-body"><p style={{ margin: 0, fontSize: 13 }}>Hãy ôn lại bằng cheatsheet, thuật ngữ, và tiếp tục với deep learning nhé.</p></div>
        </div>
      )}

      <div className="card">
        <div className="card-head"><span className="title">Thông tin khóa học</span></div>
        <div className="card-body" style={{ fontSize: 12.5, lineHeight: 1.7 }}>
          <div><b>Lịch:</b> {COURSE.schedule} · <b>Tự học:</b> {COURSE.selfstudy}</div>
          <div><b>Đối tượng:</b> {COURSE.audience}</div>
          <div><b>Đầu vào:</b> {COURSE.prereq}</div>
          <div><b>Công cụ:</b> {COURSE.tools}</div>
          <div style={{ marginTop: 8 }}><b>Thang điểm:</b></div>
          {COURSE.grading.map(g => (
            <div style={{ marginLeft: 10 }} key={g.part}>• {g.part} <b>({g.pct})</b> — {g.desc}</div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-head"><span className="title">Lộ trình 11 tuần</span></div>
        <div className="card-body">{weekCards}</div>
      </div>
    </>
  );
}
