import "./App.css";
import FormSignUp from "./components/FormSignUp";
import { Container, Typography } from "@mui/material";

function App() {
  const handleSubmit = (valores) => {
    console.log(valores);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center">
        Formulario de registro
      </Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
