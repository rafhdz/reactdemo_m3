import * as React from "react";
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Ancho del sidebar
const drawerWidth = 240;


export default function Home() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar (Drawer) con menú
  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <img
          src="/viba1.png"
          alt="Carnes ViBa"
          style={{ width: "120px" }}
        />
      </Box>
      <Divider />
      {/* Opciones de menú */}
      <List sx={{ flex: 1 }}>
        <ListItemButton>
          <HomeIcon sx={{ mr: 2 }} />
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/producto')}>
        <StoreIcon sx={{ mr: 2 }} />
        <ListItemText primary="Producto" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ChevronRightIcon sx={{ mr: 1 }} />
          <ListItemText primary="Carne de res" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ChevronRightIcon sx={{ mr: 1 }} />
          <ListItemText primary="Carne de cerdo" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ChevronRightIcon sx={{ mr: 1 }} />
          <ListItemText primary="Pollo" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ChevronRightIcon sx={{ mr: 1 }} />
          <ListItemText primary="Pavo" />
        </ListItemButton>
      </List>
      <Divider />
      {/* Footer de la barra lateral */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="caption" display="block">
          © 2025 Carnes ViBa
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ 
        display: "flex", 
        height: "100vh",
        width: "100vw",



    }}>
      {/* AppBar superior */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "linear-gradient(90deg, #8B0000, #E53935)",
        }}
      >
        <Toolbar>
          {/* Botón para abrir/cerrar el Drawer en móviles */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* Título principal */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inicio
          </Typography>
          {/* Sección a la derecha (ej. Cuenta/Logout) */}
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/login")} // <--- Navegación al login
            >
            Cuenta
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        {/* Drawer para pantallas pequeñas */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* Drawer para pantallas grandes */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // para dejar espacio debajo del AppBar
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        {/* Tarjetas de estadísticas */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">75</Typography>
                <Typography variant="body2" color="text.secondary">
                  Órdenes totales
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">357</Typography>
                <Typography variant="body2" color="text.secondary">
                  Proveedores totales
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">65</Typography>
                <Typography variant="body2" color="text.secondary">
                  Órdenes canceladas
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">$128</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ganancias totales
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Ejemplo de contenedor para gráficos / reportes */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 300 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  Predicción de demanda (Placeholder)
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#eee",
                    height: "100%",
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                  }}
                >
                  {/* Aquí iría tu componente de gráfico real */}
                  <Typography variant="caption">contenido</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: 300 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  Tiempo en recibir un pedido (Placeholder)
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#eee",
                    height: "100%",
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="caption">contenido</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}