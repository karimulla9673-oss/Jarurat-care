import { Search, User, Phone, Calendar, AlertCircle, Loader2, Plus } from 'lucide-react';

const PatientsPage = ({
  filteredPatients,
  searchQuery,
  setSearchQuery,
  handleViewDetails,
  setIsAddPatientOpen,
  loading,
  error,
  fetchPatients
}) => {
  return (
    <div className="patients-page">
      <div className="container">
        <div className="page-header">
          <h2 className="page-title">Patient Records</h2>
          <button
            onClick={() => setIsAddPatientOpen(true)}
            className="add-button"
          >
            <Plus size={20} />
            Add Patient
          </button>
        </div>

        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {loading && (
          <div className="loading-container">
            <Loader2 size={40} className="spinner" />
            <p className="loading-text">Loading patients...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <AlertCircle size={24} className="error-icon" />
            <p className="error-text">Error: {error}</p>
            <button onClick={fetchPatients} className="retry-button">
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="patient-grid">
            {filteredPatients.map(patient => (
              <div key={patient.id} className="patient-card">
                <div className="patient-avatar">
                  <User size={32} />
                </div>
                <div className="patient-info">
                  <h3 className="patient-name">{patient.name}</h3>
                  <div className="patient-detail">
                    <Calendar size={16} />
                    <span>{patient.age} years old</span>
                  </div>
                  <div className="patient-detail">
                    <Phone size={16} />
                    <span>{patient.contact}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleViewDetails(patient)}
                  className="view-button"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && filteredPatients.length === 0 && (
          <div className="empty-state">
            <User size={64} className="empty-icon" />
            <p className="empty-text">No patients found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsPage;