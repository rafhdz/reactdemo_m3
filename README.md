Carnes ViBa - Dashboard & Login

Este proyecto es un sistema de dashboard y login para la empresa Carnes ViBa, desarrollado con React y Material-UI. Cuenta con:

Pantalla de Login: Permite autenticar al usuario con credenciales simples (email y contraseña).
Layout de Dashboard: Incluye una barra lateral (Drawer) con opciones de menú, un AppBar superior y tarjetas de estadísticas.
Requisitos

Node.js (versión LTS recomendada)
npm o yarn para gestionar dependencias
Tecnologías Utilizadas

React
React Router - Para el manejo de rutas (login, dashboard, etc.)
Material-UI (MUI) - Para componentes de interfaz de usuario
@mui/icons-material - Conjunto de íconos para MUI
Estructura del Proyecto

.
├── public
│   ├── index.html
│   ├── viba1.png
│   ├── carne.png
│   └── ...
├── src
│   ├── components
│   │   ├── Login.jsx
│   │   └── Producto.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
└── README.md
public/: Archivos estáticos como imágenes (viba1.png, carne.png) y index.html.
src/:
components/Login.jsx: Pantalla de inicio de sesión.
components/Producto.jsx: Dashboard con barra lateral y tarjetas de ejemplo.
App.jsx: Definición de rutas (React Router).
main.jsx: Punto de entrada principal (monta App.jsx).
Instalación

Clonar el repositorio:
git clone https://github.com/tu-usuario/carnes-viba-dashboard.git
Instalar dependencias:
cd carnes-viba-dashboard
npm install
o

yarn
Ejecutar la aplicación en modo desarrollo:
npm run dev
o

yarn dev
Luego abre http://localhost:5173/ (o el puerto que indique la consola).
Uso

Pantalla de Login:
Acceder a la ruta /login y usar las credenciales configuradas en Login.jsx.
Dashboard (Producto.jsx):
Se accede después de iniciar sesión. Incluye:
Barra lateral (Drawer) con menús e íconos.
AppBar con la opción "Cuenta" (al hacer clic se regresa a /login).
Tarjetas de estadísticas con datos de ejemplo.
Secciones placeholders para gráficos.
Scripts Disponibles

npm run dev o yarn dev: Inicia el servidor de desarrollo.
npm run build o yarn build: Crea la build de producción en la carpeta dist.
npm run preview o yarn preview: Sirve la build localmente (previo a despliegue).
Personalización

Estilos: Personaliza el theme de MUI o las props sx en cada componente para cambiar colores, fuentes y tamaños.
Íconos: Cambia los íconos importados de @mui/icons-material.
Rutas: Ajusta la configuración de React Router en App.jsx según tus necesidades.
Funciones Reales: Sustituye los alert() o logs por la lógica real de tu aplicación (llamadas a API, bases de datos, etc.).
Contribuciones

Haz un fork del repositorio.
Crea un branch con tu nueva funcionalidad: git checkout -b feature/nueva-funcionalidad.
Commitea tus cambios: git commit -m 'Añade nueva funcionalidad'.
Sube tu branch: git push origin feature/nueva-funcionalidad.
Crea un Pull Request en GitHub.
Licencia

Este proyecto está bajo la MIT License. Puedes usarlo y modificarlo libremente citando la autoría original.

¡Gracias por usar Carnes ViBa - Dashboard & Login! Para dudas o mejoras, abre un issue o envía un pull request.