import { NavLink } from 'react-router-dom';

const TABS = [
  { to: "/", label: "Tổng quan", end: true },
  { to: "/cheatsheet", label: "Cheatsheet" },
  { to: "/glossary", label: "Thuật ngữ" },
  { to: "/flashcards", label: "Flashcard" },
  { to: "/projects", label: "Đồ án" },
  { to: "/exam", label: "Kiểm tra cuối" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <span className="brand">ML · Tự học</span>
      {TABS.map(t => (
        <NavLink
          key={t.to}
          className={({ isActive }) => "tab" + (isActive ? " active" : "")}
          to={t.to}
          end={t.end}
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
}
