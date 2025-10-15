import { useState } from 'react';
import { X } from 'lucide-react';

const AddPatientModal = ({ isOpen, onClose, onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.contact || !formData.email || !formData.address) {
      alert('Please fill all fields');
      return;
    }
    
    onAddPatient(formData);
    setFormData({ name: '', age: '', contact: '', email: '', address: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add New Patient</h3>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Contact</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;