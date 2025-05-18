import React from 'react';
import ContactForm from './ContactForm'; // Asegúrate que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1>Contacto</h1>
      <ContactForm />
    </div>
  );
}

export default App;
