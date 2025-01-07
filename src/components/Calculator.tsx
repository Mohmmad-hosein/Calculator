import React, { useState } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <Box
      sx={{
        width: 350,
        margin: "auto",
        padding: 3,
        border: "1px solid #444",
        borderRadius: "12px",
        background: "linear-gradient(145deg, #1e1e1e, #343434)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        inputProps={{
          style: {
            textAlign: "right",
            background: "#f5f5f5",
            borderRadius: "8px",
            color: "#333",
            padding: "10px",
          },
        }}
        margin="normal"
        disabled
      />
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Grid container spacing={1}>
            {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((num) => (
              <Grid item xs={4} key={num}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: "#333",
                    color: "#fff",
                    "&:hover": {
                      background: "#555",
                    },
                  }}
                  onClick={() => handleClick(num)}
                >
                  {num}
                </Button>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#333",
                  color: "#fff",
                  "&:hover": {
                    background: "#555",
                  },
                }}
                onClick={() => handleClick("0")}
              >
                0
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {["+", "-", "*", "/"].map((op) => (
            <Grid item xs={12} key={op}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  background: "#1976d2",
                  "&:hover": {
                    background: "#115293",
                  },
                  margin: "3px",
                }}
                onClick={() => handleClick(op)}
              >
                {op}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              background: "#d32f2f",
              "&:hover": {
                background: "#9a0007",
              },
            }}
            onClick={handleClear}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <Button
            variant="contained"
            color="warning"
            fullWidth
            sx={{ background: "#ff9800", "&:hover": { background: "#f57c00" } }}
            onClick={handleBackspace}
          >
            {" "}
            ⌫{" "}
          </Button>{" "}
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{
              background: "#388e3c",
              "&:hover": {
                background: "#1b5e20",
              },
            }}
            onClick={handleCalculate}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
