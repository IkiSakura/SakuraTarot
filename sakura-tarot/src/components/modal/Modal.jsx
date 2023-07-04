import React, { useState } from 'react';

function Modal({ onClose, onSave }) {
  const [thoughts, setThoughts] = useState('');

  const handleSave = () => {
    onSave(thoughts);
    setThoughts('');
  };

  return (
    <div className="modal">
      <span className="close" onClick={onClose}>X</span>
      <h2>Modal</h2>
      <p>Fecha actual: {new Date().toLocaleDateString()}</p>
      <textarea
        placeholder="Escribe tus pensamientos..."
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
      ></textarea>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}

export default Modal;



