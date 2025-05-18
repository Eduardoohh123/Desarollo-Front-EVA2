import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ContactFormBox() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 32,
        right: 32,
        width: 250,
        backgroundColor: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Contacto Rápido
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/contacto"
        fullWidth
      >
        Ir al Formulario
      </Button>
    </Box>
  );
}

export default ContactFormBox;