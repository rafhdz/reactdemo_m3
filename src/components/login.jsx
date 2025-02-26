import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Link,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const navigate = useNavigate();

  const VALID_CREDENTIALS = {
    email: "admin",
    password: "root",
  };

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.email === VALID_CREDENTIALS.email &&
      form.password === VALID_CREDENTIALS.password
    ) {
      console.log("✅ Login exitoso");
      setError(false);
      navigate("/home");
    } else {
      console.log("❌ Credenciales incorrectas");
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",          // Toda la altura de la ventana
        width: "100vw",           // Toda la anchura de la ventana
        display: "flex",          // Layout en dos columnas
        overflow: "hidden",       // Evita scroll extra
      }}
    >
      {/* Mitad Izquierda: Formulario */}
      <Box
        sx={{
          width: "50%",           // Ocupar mitad izquierda
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #8B0000, #E53935)",
        }}
      >
        <Container maxWidth={false} /* Quita el limite 'xs' si quieres más ancho */>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 3,
              backgroundColor: "white",
              maxWidth: 400, /* Controla el ancho del Paper si deseas */
              margin: "0 auto",
            }}
          >
            {/* Logo */}
            <img
              src="/viba1.png"  // Revisa que exista en tu carpeta public/
              alt="Carnes ViBa"
              style={{ width: "150px", marginBottom: "20px" }}
            />

            <Typography variant="h5" fontWeight="bold" color="text.primary">
              Iniciar Sesión
            </Typography>

            {/* Formulario */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%", mt: 2 }}
            >
              <TextField
                label="Email"
                name="email"
                type="text"
                
                value={form.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={error}
              />
              <TextField
                label="Contraseña"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                error={error}
                helperText={error ? "Correo o contraseña incorrectos" : ""}
              />

              <Link
                href="#"
                underline="hover"
                sx={{ display: "block", textAlign: "right", mt: 1 }}
              >
                ¿Olvidaste tu contraseña?
              </Link>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#E53935",
                  "&:hover": { backgroundColor: "#C62828" },
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                Sign In
              </Button>

              <Typography textAlign="center" sx={{ my: 2 }}>
                o continuar con
              </Typography>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  borderColor: "#E53935",
                  color: "#E53935",
                  "&:hover": { backgroundColor: "#fbe9e7" },
                }}
              >
                Google
              </Button>
            </Box>

            <Typography variant="caption" sx={{ mt: 2 }}>
              <Link href="#" underline="hover">
                Términos & Condiciones
              </Link>{" "}
              |{" "}
              <Link href="#" underline="hover">
                Soporte
              </Link>{" "}
              |{" "}
              <Link href="#" underline="hover">
                Legal & Opciones
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Mitad Derecha: Imagen de fondo */}
      <Box
        sx={{
          width: "50%",                // Mitad derecha
          backgroundImage: "url('/carne.png')",
          backgroundSize: "cover",     // Ocupa todo el espacio (recortando si no encaja)
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Box>
  
  );
}
