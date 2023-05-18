// se esta importando todo desde Material UI
// las props ya tienen funciones definidas y documentadas, solo hay que buscar
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState, useEffect } from "react";

const FormSignUp = (props) => {
  const { handleSubmit } = props;
  const [name, setName] = useState("Rodrigo");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [condiciones, setCondiciones] = useState(true);
  const [promociones, setPromociones] = useState(true);

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "",
    },
  });

  const validarNombre = (nombre) => {
    if (nombre.length >= 3) {
      return {
        name: {
          error: false,
          message: "",
        },
      };
    } else {
      return {
        name: {
          error: true,
          message: "Deben ser al menos 3 caracteres",
        },
      };
    }
  };

  // Cada vez que se registre un cambio en el objeto o variable del final ("name" en este caso), se ejecuta la funcion
  // useEffect(() => {
  //   console.log("name cambio: ", name);
  // }, [name]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, condiciones, promociones });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={(e) => {
          setErrors(validarNombre(e.target.value));
        }}
      />
      <TextField
        id="lastName"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        value={lastName}
      />
      <TextField
        id="email"
        label="Correco Electronico"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Terminos y condiciones"
          required
          checked={condiciones}
          onChange={(e) => {
            setCondiciones(e.target.checked);
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Promociones y Novedades"
          checked={promociones}
          onChange={(e) => {
            setPromociones(e.target.checked);
          }}
        />
      </FormGroup>
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
};

export default FormSignUp;
