const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <span className="logo-plus">+</span>
          </div>
          <h1 className="logo-text">Jarurat Care</h1>
        </div>
        <nav className="nav">
          <button
            onClick={() => setCurrentPage('home')}
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('patients')}
            className={`nav-link ${currentPage === 'patients' ? 'active' : ''}`}
          >
            Patients
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;