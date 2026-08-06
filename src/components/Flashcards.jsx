import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store.jsx';
import { GLOSSARY } from '../data.js';

export default function Flashcards() {
  const { state, todayStr, answerCard } = useApp();
  const [flipped, setFlipped] = useState(false);

  const today = todayStr();
  const cards = state.cards || {};
  const due = GLOSSARY.map((g, i) => ({ i, g, c: cards[i] || { box: 1, due: today } }))
    .filter(x => x.c.due <= today);
  const mastered = GLOSSARY.filter((_, i) => (cards[i] || {}).box === 5).length;
  const total = GLOSSARY.length;

  const cur = due[0];

  const pick = (knew) => {
    answerCard(cur.i, knew);
    setFlipped(false);
  };

  let body;
  if (!due.length) {
    body = (
      <div className="card"><div className="card-body" style={{ textAlign: "center", padding: 28 }}>
        <div style={{ fontSize: 30, marginBottom: 8 }}>🎉</div>
        <p style={{ margin: "0 0 6px", fontWeight: 600, fontFamily: "'Space Grotesk'" }}>Hết thẻ cần ôn hôm nay!</p>
        <p style={{ margin: 0, fontSize: 12.5, color: "var(--ink-soft)" }}>{mastered}/{total} thuật ngữ đã thuộc (box 5). Quay lại sau để ôn tiếp.</p>
      </div></div>
    );
  } else {
    const box = cur.c.box;
    const remaining = due.length - 1;
    body = (
      <>
        <div className="flash-count">📚 <b>{due.length}</b> thẻ đến hạn hôm nay · <b>{mastered}</b>/{total} đã thuộc (box 5)</div>
        <div className={"flash-card" + (flipped ? " flipped" : "")} onClick={() => setFlipped(f => !f)}>
          <div className="flash-inner">
            <div className="flash-face flash-front">
              <div>{cur.g.term}</div>
              <div className="hint">Bấm để lật · box {box}</div>
            </div>
            <div className="flash-face flash-back">
              <div>{cur.g.def}</div>
            </div>
          </div>
        </div>
        <div className="flash-actions">
          <button className="flash-btn forget" onClick={() => pick(false)}>😅 Còn quên</button>
          <button className="flash-btn know" onClick={() => pick(true)}>✅ Tôi biết</button>
        </div>
        <div className="flash-progress">
          {due.map((_, k) => <span key={k} className={"dot" + (k === 0 ? " done" : "")}></span>)}
        </div>
      </>
    );
  }

  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">Ôn tập ghi nhớ · spaced repetition</div>
        <h1>Flashcard thuật ngữ</h1>
        <div className="sub">Lặp lại ngắt quãng (Leitner): trả lời đúng thì thẻ được ôn thưa dần, quên thì về lại từ đầu. Giúp nhớ lâu hơn là học dồn.</div>
      </header>
      {body}
    </>
  );
}
