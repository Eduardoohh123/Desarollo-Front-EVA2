import React, { useState } from "react";
import { Box, Button, TextField, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DynamicList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleDelete = (idx) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <Box sx={{ my: 4, maxWidth: 400, mx: "auto" }}>
      <TextField
        label="Agregar elemento"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAdd} sx={{ mt: 1, mb: 2 }} fullWidth>
        Agregar
      </Button>
      <List>
        {items.map((item, idx) => (
          <ListItem
            key={idx}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(idx)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DynamicList;