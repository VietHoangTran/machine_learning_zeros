import { Link } from 'react-router-dom';
import { CHEATSHEETS } from '../data.js';

export default function Cheatsheet() {
  return (
    <>
      <Link className="back" to="/">← Tổng quan</Link>
      <header>
        <div className="eyebrow">Tra cứu nhanh</div>
        <h1>Cheatsheet</h1>
        <div className="sub">Bảng tóm tắt cú pháp và lệnh thường dùng — mở khi bạn quên trong lúc làm bài. Nhấn <b>In / lưu PDF</b> để có bản gọn, đẹp.</div>
      </header>
      <div style={{ textAlign: "right", marginTop: 10 }}>
        <button className="print-btn" onClick={() => window.print()}>🖨 In / lưu PDF</button>
      </div>
      <div className="card"><div className="card-body">
        {CHEATSHEETS.map(sec => (
          <div className="cheat-sect" key={sec.title}>
            <h4>{sec.title}</h4>
            <table>
              <tbody>
                {sec.items.map((it, i) => (
                  <tr key={i}><td><b>{it[0]}</b></td><td dangerouslySetInnerHTML={{ __html: it[1] }} /></tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div></div>
    </>
  );
}
