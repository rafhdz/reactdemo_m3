import { useState } from "react";
import { FlexBox } from "@ui5/webcomponents-react";
import {
  ShellBar,
  SideNavigation,
  SideNavigationItem,
} from "@ui5/webcomponents-react";
import { Card, Title, Input } from "@ui5/webcomponents-react";
import { Button } from "@ui5/webcomponents-react";
import { Dialog, Select, Option } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/retail-store.js";
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/add.js";
import { useNavigate } from "react-router-dom";
import viba1 from "../assets/viba1.png";

const drawerWidth = 240;

export default function Usuarios() {
  const navigate = useNavigate();
  const [isSidebarOpen] = useState(true);
  const [openCrear, setOpenCrear] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState(null);
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState([]);

  //Placeholders
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", rol: "Admin" },
    { id: 2, nombre: "Ana Torres", correo: "ana@example.com", rol: "Vendedor" },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    rol: "",
  });

  const handleNavigationClick = (event) => {
    const selected = event.detail.item.dataset.route;
    if (selected) navigate(selected);
  };

  const handleInputChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const agregarUsuario = () => {
    if (nuevoUsuario.nombre && nuevoUsuario.correo && nuevoUsuario.rol) {
      const nuevo = {
        ...nuevoUsuario,
        id: usuarios.length + 1,
      };
      setUsuarios([...usuarios, nuevo]);
      setNuevoUsuario({ nombre: "", correo: "", rol: "" });
    }
  };

  const eliminarUsuariosSeleccionados = () => {
    setUsuarios(usuarios.filter((u) => !usuariosSeleccionados.includes(u.id)));
    setUsuariosSeleccionados([]); // limpiar selección después de eliminar
  };

  {
    /* Box Crear Usuarios */
  }
  <Dialog
    headerText="Agregar Usuario"
    open={openCrear}
    onAfterClose={() => setOpenCrear(false)}
    footer={
      <Button
        design="Emphasized"
        onClick={() => {
          agregarUsuario();
          setOpenCrear(false);
        }}
      >
        Guardar
      </Button>
    }
  >
    <FlexBox style={{ padding: "1rem", gap: "1rem" }}>
      <Input
        placeholder="Nombre"
        name="nombre"
        value={nuevoUsuario.nombre}
        onInput={handleInputChange}
      />
      <Input
        placeholder="Correo"
        name="correo"
        value={nuevoUsuario.correo}
        onInput={handleInputChange}
      />
      <Select
        name="rol"
        value={nuevoUsuario.rol}
        onChange={(e) =>
          setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
        }
      >
        <Option>Admin</Option>
        <Option>Proveedor</Option>
      </Select>
    </FlexBox>
  </Dialog>;

  {
    /* Box editar usuarios */
  }
  <Dialog
    headerText="Editar Usuario"
    open={openEditar}
    onAfterClose={() => setOpenEditar(false)}
    footer={
      <Button
        design="Emphasized"
        onClick={() => {
          setUsuarios(
            usuarios.map((u) => (u.id === usuarioEditar.id ? usuarioEditar : u))
          );
          setOpenEditar(false);
        }}
      >
        Guardar
      </Button>
    }
  >
    {usuarioEditar && (
      <FlexBox style={{ padding: "1rem", gap: "1rem" }}>
        <Input
          placeholder="Nombre"
          value={usuarioEditar.nombre}
          onInput={(e) =>
            setUsuarioEditar({ ...usuarioEditar, nombre: e.target.value })
          }
        />
        <Input
          placeholder="Correo"
          value={usuarioEditar.correo}
          onInput={(e) =>
            setUsuarioEditar({ ...usuarioEditar, correo: e.target.value })
          }
        />
        <Select
          value={usuarioEditar.rol}
          onChange={(e) =>
            setUsuarioEditar({ ...usuarioEditar, rol: e.target.value })
          }
        >
          <Option>Admin</Option>
          <Option>Proveedor</Option>
        </Select>
      </FlexBox>
    )}
  </Dialog>;

  return (
    <FlexBox direction="Row" style={{ height: "100vh", width: "100vw" }}>
      <ShellBar
        logo={<img src={viba1} alt="Carnes ViBa" style={{ height: "40px" }} />}
        primaryTitle="Usuarios"
        onProfileClick={() => navigate("/login")}
        profile={{ image: viba1 }}
        style={{
          width: "100%",
          background: "#B71C1C",
          color: "white",
          position: "fixed",
          zIndex: 1201,
        }}
      />

      {isSidebarOpen && (
        <div
          style={{
            width: drawerWidth,
            marginTop: "3.5rem",
            height: "calc(100vh - 3.5rem)",
            backgroundColor: "#fff",
            boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
          }}
        >
          <SideNavigation onSelectionChange={handleNavigationClick}>
            <SideNavigationItem
              icon="home"
              text="Dashboard"
              data-route="/Home"
            />
            <SideNavigationItem
              icon="retail-store"
              text="Producto"
              data-route="/producto"
            />
            <SideNavigationItem
              icon="navigation-right-arrow"
              text="Carne de res"
            />
            <SideNavigationItem
              icon="navigation-right-arrow"
              text="Carne de cerdo"
            />
            <SideNavigationItem icon="navigation-right-arrow" text="Pollo" />
            <SideNavigationItem icon="navigation-right-arrow" text="Pavo" />
            <SideNavigationItem
              icon="employee"
              text="Usuarios"
              data-route="/usuarios"
            />
          </SideNavigation>
        </div>
      )}

      {/* Main */}
      <FlexBox
        direction="Column"
        style={{
          flexGrow: 1,
          padding: "2rem",
          marginTop: "4rem",
          backgroundColor: "#fafafa",
          minHeight: "100vh",
        }}
      >
        <Title level="H3" style={{ marginBottom: "1rem" }}>
          Usuarios
        </Title>

        {/* Barra */}
        <FlexBox
          direction="Row"
          justifyContent="SpaceBetween"
          style={{ marginBottom: "1rem" }}
        >
          <Input
            placeholder="Buscar por Nombre"
            style={{ width: "300px" }}
            icon="search"
          />
          <FlexBox direction="Row" wrap style={{ gap: "0.5rem" }}>
            <Button
              design="Negative"
              icon="delete"
              onClick={eliminarUsuariosSeleccionados}
              disabled={usuariosSeleccionados.length === 0}
            >
              Eliminar
            </Button>
            <Button
              design="Emphasized"
              icon="add"
              onClick={() => setOpenCrear(true)}
            >
              Crear
            </Button>
            <Button
              design="Attention"
              icon="edit"
              onClick={() => {
                if (usuarios.length > 0) setUsuarioEditar(usuarios[0]); // Por ahora el primero
                setOpenEditar(true);
              }}
            >
              Editar
            </Button>
          </FlexBox>
        </FlexBox>

        {/* Tabla de usuarios */}
        <Card style={{ padding: "1rem", marginTop: "1rem" }}>
          <Title level="H5" style={{ marginBottom: "1rem", padding: "12px" }}>
            Base de Datos de Usuarios
          </Title>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "sans-serif",
            }}
          >
            <thead style={{ backgroundColor: "#f5f5f5" }}>
              <tr>
                <th style={{ padding: "12px" }}></th>{" "}
                {/* espacio vacío para alinear con checkboxes */}
                <th style={{ textAlign: "left", padding: "12px" }}>Nombre</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Correo</th>
                <th style={{ textAlign: "left", padding: "12px" }}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "12px" }}>
                    <input
                      type="checkbox"
                      checked={usuariosSeleccionados.includes(usuario.id)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        if (checked) {
                          setUsuariosSeleccionados([
                            ...usuariosSeleccionados,
                            usuario.id,
                          ]);
                        } else {
                          setUsuariosSeleccionados(
                            usuariosSeleccionados.filter(
                              (id) => id !== usuario.id
                            )
                          );
                        }
                      }}
                    />
                  </td>
                  <td style={{ padding: "12px" }}>{usuario.nombre}</td>
                  <td style={{ padding: "12px" }}>{usuario.correo}</td>
                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        backgroundColor:
                          usuario.rol.toLowerCase() === "admin"
                            ? "#e0d4fc"
                            : "#d0fce0",
                        color: "#000",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                      }}
                    >
                      {usuario.rol}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* MODAL: Crear Usuario */}
        <Dialog
          headerText="Agregar Usuario"
          open={openCrear}
          onAfterClose={() => setOpenCrear(false)}
          footer={
            <Button
              design="Emphasized"
              onClick={() => {
                agregarUsuario();
                setOpenCrear(false);
              }}
            >
              Guardar
            </Button>
          }
        >
          <FlexBox style={{ padding: "1rem", gap: "1rem" }}>
            <Input
              placeholder="Nombre"
              name="nombre"
              value={nuevoUsuario.nombre}
              onInput={handleInputChange}
            />
            <Input
              placeholder="Correo"
              name="correo"
              value={nuevoUsuario.correo}
              onInput={handleInputChange}
            />
            <Select
              name="rol"
              value={nuevoUsuario.rol}
              onChange={(e) =>
                setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
              }
            >
              <Option>Admin</Option>
              <Option>Proveedor</Option>
            </Select>
          </FlexBox>
        </Dialog>

        {/* MODAL: Editar Usuario */}
        <Dialog
          headerText="Editar Usuario"
          open={openEditar}
          onAfterClose={() => setOpenEditar(false)}
          footer={
            <Button
              design="Emphasized"
              onClick={() => {
                setUsuarios(
                  usuarios.map((u) =>
                    u.id === usuarioEditar.id ? usuarioEditar : u
                  )
                );
                setOpenEditar(false);
              }}
            >
              Guardar
            </Button>
          }
        >
          {usuarioEditar && (
            <FlexBox style={{ padding: "1rem", gap: "1rem" }}>
              <Input
                placeholder="Nombre"
                value={usuarioEditar.nombre}
                onInput={(e) =>
                  setUsuarioEditar({ ...usuarioEditar, nombre: e.target.value })
                }
              />
              <Input
                placeholder="Correo"
                value={usuarioEditar.correo}
                onInput={(e) =>
                  setUsuarioEditar({ ...usuarioEditar, correo: e.target.value })
                }
              />
              <Select
                value={usuarioEditar.rol}
                onChange={(e) =>
                  setUsuarioEditar({ ...usuarioEditar, rol: e.target.value })
                }
              >
                <Option>Admin</Option>
                <Option>Proveedor</Option>
              </Select>
            </FlexBox>
          )}
        </Dialog>
      </FlexBox>
    </FlexBox>
  );
}
