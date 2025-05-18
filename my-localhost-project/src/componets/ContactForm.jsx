import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [formMsg, setFormMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
    setFormMsg('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({ name: '', email: '', message: '' });
      setFormMsg('');
      setShowModal(true);
    } else {
      setFormMsg('Por favor corrige los errores antes de enviar.');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            isInvalid={errors.name}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa tu nombre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            Ingresa un email válido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            isInvalid={errors.message}
          />
          <Form.Control.Feedback type="invalid">
            El mensaje no puede estar vacío.
          </Form.Control.Feedback>
        </Form.Group>

        {formMsg && <Alert variant="danger">{formMsg}</Alert>}

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu formulario fue llenado con éxito.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactForm;
