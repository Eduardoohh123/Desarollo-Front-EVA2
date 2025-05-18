import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

function ValidatedContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!fields.name.trim()) errs.name = "El nombre es obligatorio";
    if (!fields.email.trim()) {
      errs.email = "El correo es obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) {
      errs.email = "Correo inválido";
    }
    if (!fields.message.trim()) errs.message = "El mensaje es obligatorio";
    return errs;
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setFields({ name: "", email: "", message: "" });
    } else {
      setErrors(errs);
      setSuccess(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#fff",
        p: 3,
        borderRadius: 2,
        boxShadow: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" align="center" gutterBottom>
        Formulario de Contacto Validado
      </Typography>
      {success && <Alert severity="success">¡Mensaje enviado correctamente!</Alert>}
      <TextField
        label="Nombre"
        name="name"
        value={fields.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        required
        fullWidth
      />
      <TextField
        label="Correo"
        name="email"
        type="email"
        value={fields.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
        fullWidth
      />
      <TextField
        label="Mensaje"
        name="message"
        multiline
        rows={4}
        value={fields.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </Box>
  );
}

export default ValidatedContactForm;