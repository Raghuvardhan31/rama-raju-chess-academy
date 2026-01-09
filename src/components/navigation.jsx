import { NavLink, Outlet } from "react-router-dom";
import { Home, Puzzle, Trophy, Info } from "lucide-react";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      {/* ===== TOP NAV (DESKTOP) ===== */}
      <header className="top-nav">
        <div className="top-nav-container">
          <NavLink to="/" className="logo">
            <img src="/chesswave.png" alt="ChessWave" className="logo-img" />
            <span className="logo-text">Rama Raju Chess Academy</span>
          </NavLink>

          <nav className="top-nav-links">
            <NavLink to="/" className="nav-item">
              <Home size={18} /> Home
            </NavLink>
            <NavLink to="/about" className="nav-item">
              <Info size={18} /> About
            </NavLink>
            <NavLink to="/puzzles" className="nav-item">
              <Puzzle size={18} /> Puzzles
            </NavLink>
            <NavLink to="/tournaments" className="nav-item">
              <Trophy size={18} /> Tournaments
            </NavLink>
          </nav>
        </div>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ===== BOTTOM NAV (MOBILE) ===== */}
      <nav className="bottom-nav">
        <NavLink to="/" className="bottom-nav-item">
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about" className="bottom-nav-item">
          <Info size={20} />
          <span>About</span>
        </NavLink>
        <NavLink to="/puzzles" className="bottom-nav-item">
          <Puzzle size={20} />
          <span>Puzzles</span>
        </NavLink>
                <NavLink to="/tournaments" className="bottom-nav-item">
          <Trophy size={20} />
          <span>Tourneys</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
