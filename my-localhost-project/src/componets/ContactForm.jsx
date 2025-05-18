import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function ContactForm() {
  return (
    <Box
      component="form"
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
        Formulario de Contacto
      </Typography>
      <TextField label="Nombre" name="name" required fullWidth />
      <TextField label="Correo" name="email" type="email" required fullWidth />
      <TextField label="Mensaje" name="message" multiline rows={4} required fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </Box>
  );
}

export default ContactForm;