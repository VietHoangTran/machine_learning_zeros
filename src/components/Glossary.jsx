import { Link } from 'react-router-dom';
import { GLOSSARY } from '../data.js';

export default function Glossary() {
  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">Bảng thuật ngữ</div>
        <h1>Thuật ngữ</h1>
        <div className="sub">Những khái niệm quan trọng xuyên suốt khóa học, giải thích bằng lời dễ hiểu.</div>
      </header>
      <div className="card"><div className="card-body">
        {GLOSSARY.map((g, i) => (
          <div className="gloss-item" key={i}>
            <div className="gloss-term">{g.term}</div>
            <div className="gloss-def">{g.def}</div>
          </div>
        ))}
      </div></div>
    </>
  );
}
