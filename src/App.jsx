import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PatientsPage from './components/PatientsPage';
import Modal from './components/Modal';
import AddPatientModal from './components/AddPatientModal';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentPage === 'patients') {
      fetchPatients();
    }
  }, [currentPage]);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [searchQuery, patients]);

  const fetchPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch patients');
      const data = await response.json();
      
      const formattedPatients = data.map(user => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 50) + 20,
        contact: user.phone,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}`,
        company: user.company.name
      }));
      
      setPatients(formattedPatients);
      setFilteredPatients(formattedPatients);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleAddPatient = (newPatient) => {
    const patient = {
      id: patients.length + 1,
      ...newPatient,
      age: parseInt(newPatient.age),
      company: 'Self Added'
    };
    
    setPatients([patient, ...patients]);
    setIsAddPatientOpen(false);
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'patients' && (
          <PatientsPage
            filteredPatients={filteredPatients}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleViewDetails={handleViewDetails}
            setIsAddPatientOpen={setIsAddPatientOpen}
            loading={loading}
            error={error}
            fetchPatients={fetchPatients}
          />
        )}
        {currentPage === 'about' && <AboutPage />}
      </main>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        patient={selectedPatient} 
      />
      <AddPatientModal 
        isOpen={isAddPatientOpen} 
        onClose={() => setIsAddPatientOpen(false)}
        onAddPatient={handleAddPatient}
      />
    </div>
  );
}

export default App;