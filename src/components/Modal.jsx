import { X, User } from 'lucide-react';

const Modal = ({ isOpen, onClose, patient }) => {
  if (!isOpen || !patient) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Patient Details</h3>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-avatar-large">
            <User size={48} />
          </div>
          <h2 className="modal-patient-name">{patient.name}</h2>
          <div className="modal-details">
            <div className="modal-detail-row">
              <strong>Age:</strong>
              <span>{patient.age} years</span>
            </div>
            <div className="modal-detail-row">
              <strong>Contact:</strong>
              <span>{patient.contact}</span>
            </div>
            <div className="modal-detail-row">
              <strong>Email:</strong>
              <span>{patient.email}</span>
            </div>
            <div className="modal-detail-row">
              <strong>Address:</strong>
              <span>{patient.address}</span>
            </div>
            <div className="modal-detail-row">
              <strong>Company:</strong>
              <span>{patient.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;