import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

function ShowHideBox() {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("primary");

  return (
    <Box sx={{ my: 4 }}>
      <Button
        variant="contained"
        color={color}
        onClick={() => setVisible((v) => !v)}
        sx={{ mr: 2 }}
      >
        {visible ? "Ocultar mensaje" : "Mostrar mensaje"}
      </Button>
      <Button
        variant="outlined"
        onClick={() => setColor(color === "primary" ? "secondary" : "primary")}
      >
        Cambiar color
      </Button>
      {visible && (
        <Typography sx={{ mt: 2 }} color={color}>
          ¡Este es un mensaje que puedes mostrar u ocultar!
        </Typography>
      )}
    </Box>
  );
}

export default ShowHideBox;