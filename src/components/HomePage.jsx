const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Jarurat Care</h1>
        <p className="hero-subtitle">
          Your trusted partner in patient care management
        </p>
        <p className="hero-description">
          Manage patient records efficiently with our intuitive dashboard. 
          Access patient information, track medical histories, and streamline your healthcare workflow.
        </p>
        <button
          onClick={() => setCurrentPage('patients')}
          className="hero-cta"
        >
          View Patients
        </button>
      </div>
    </div>
  );
};

export default HomePage;