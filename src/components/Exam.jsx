import { Link } from 'react-router-dom';
import { useApp } from '../store.jsx';
import { WEEKS } from '../data.js';

export default function Exam() {
  const { state, answerExam } = useApp();

  const exam = [];
  WEEKS.forEach(w => {
    if (!w.quiz || !w.quiz.length) return;
    w.quiz.forEach(q => {
      exam.push({ week: w.id, q: q.q, opts: q.opts, a: q.a, why: q.why });
    });
  });
  const total = exam.length;
  const answered = state.answers ? Object.keys(state.answers).length : 0;
  const correct = state.answers ? Object.values(state.answers).filter(a => a).length : 0;
  const pct = total ? Math.round(correct / total * 100) : 0;
  const unAnsw = exam.filter((_, i) => !(state.answers && state.answers[i] !== undefined));

  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">Ôn tập toàn khóa</div>
        <h1>Kiểm tra cuối khóa</h1>
        <div className="sub">Gộp toàn bộ {total} câu hỏi quiz của 11 tuần thành một bài kiểm tra tổng. Trả lời được tự lưu, xem lại điểm bất cứ lúc nào.</div>
      </header>

      <div className="card">
        <div className="card-body" style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div><span className="final-score">{pct}%</span><br /><span className="final-meta">{correct} / {total} đúng</span></div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <div className="progress-track" style={{ height: 12 }}><div className="progress-fill" style={{ width: pct + "%" }}></div></div>
            <div className="progress-meta">Đã trả lời {answered}/{total} · đúng {correct}</div>
          </div>
        </div>
      </div>

      {unAnsw.length ? (
        <div className="card" style={{ borderColor: "var(--highlight)" }}>
          <div className="card-head"><span className="title">📌 Còn {unAnsw.length} câu chưa trả lời</span></div>
          <div className="card-body" style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>Tiếp tục làm bên dưới, hoặc quay lại ôn các tuần chưa chắc.</div>
        </div>
      ) : null}

      <div className="card">
        <div className="card-head"><span className="title">Đề thi tổng ({total} câu)</span></div>
        <div className="card-body">
          {exam.map((item, i) => {
            const ans = state.answers && state.answers[i] !== undefined ? state.answers[i] : null;
            return (
              <div className="q" key={i}>
                <div className="qt">
                  <span className="final-badge">Tuần {item.week}</span>
                  {i + 1}. {item.q}
                </div>
                {item.opts.map((o, oi) => {
                  let cls = "";
                  if (ans !== null) {
                    if (oi === item.a) cls = " correct";
                    else if (oi === ans) cls = " wrong";
                  }
                  return (
                    <div key={oi} className={"opt" + cls} onClick={() => answerExam(i, oi, item.a)}>{o}</div>
                  );
                })}
                <div className={"explain" + (ans !== null ? " show" : "")}>{item.why}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
