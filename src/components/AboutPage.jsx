const AboutPage = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Jarurat Care</h2>
        <p className="about-text">
          Jarurat Care is a modern patient records management system designed to help 
          healthcare professionals efficiently manage and access patient information.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-title">Easy Access</h3>
            <p className="feature-text">Quick and secure access to patient records</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Organized Data</h3>
            <p className="feature-text">Well-structured patient information at your fingertips</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Search & Filter</h3>
            <p className="feature-text">Find patients instantly with powerful search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;