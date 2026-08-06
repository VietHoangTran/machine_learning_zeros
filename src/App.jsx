import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useApp } from './store.jsx';
import { WEEKS } from './data.js';
import Nav from './components/Nav.jsx';
import Dashboard from './components/Dashboard.jsx';
import WeekView from './components/WeekView.jsx';
import Cheatsheet from './components/Cheatsheet.jsx';
import Glossary from './components/Glossary.jsx';
import Flashcards from './components/Flashcards.jsx';
import Projects from './components/Projects.jsx';
import Exam from './components/Exam.jsx';

function WeekRoute() {
  const { id } = useParams();
  const w = WEEKS.find(x => x.id === parseInt(id, 10));
  if (!w) return <Navigate to="/" replace />;
  return <WeekView w={w} />;
}

export default function App() {
  const { toast } = useApp();
  return (
    <>
      <Nav />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/week/:id" element={<WeekRoute />} />
          <Route path="/cheatsheet" element={<Cheatsheet />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer>Nhập môn Học máy · Khóa 11 tuần · Dữ liệu chỉ lưu trên trình duyệt của bạn.</footer>
      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>
    </>
  );
}
