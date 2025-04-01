import { useState } from "react";
import { FlexBox } from "@ui5/webcomponents-react";
import { ShellBar, SideNavigation, SideNavigationItem } from "@ui5/webcomponents-react"
import { Card, Title, Input } from "@ui5/webcomponents-react";
import { Table, TableRow, TableCell, Label, Button } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/retail-store.js";
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents-icons/dist/add.js";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

export default function Usuarios() {
    const navigate = useNavigate();
    const [isSidebarOpen] = useState(true);

    //Placeholders
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", rol: "Admin" },
        { id: 2, nombre: "Ana Torres", correo: "ana@example.com", rol: "Vendedor" },
    ]);

    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        correo: "",
        rol: ""
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
                id: usuarios.length + 1
            };
            setUsuarios([...usuarios, nuevo]);
            setNuevoUsuario({ nombre: "", correo: "", rol: "" });
        }
    };

    const eliminarUsuario = (id) => {
        setUsuarios(usuarios.filter((u) => u.id !== id));
    };

    return (
        <FlexBox direction="Row" style={{ height: "100vh", width: "100vw" }}>
            <ShellBar
                logo={<img src="/viba1.png" alt="Carnes ViBa" style={{ height: "40px" }} />}
                primaryTitle="Usuarios"
                onProfileClick={() => navigate("/login")}
                profile={{ image: "/viba1.png" }}
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
                        <SideNavigationItem icon="home" text="Dashboard" data-route="/Home" />
                        <SideNavigationItem icon="retail-store" text="Producto" data-route="/producto" />
                        <SideNavigationItem icon="navigation-right-arrow" text="Carne de res" />
                        <SideNavigationItem icon="navigation-right-arrow" text="Carne de cerdo" />
                        <SideNavigationItem icon="navigation-right-arrow" text="Pollo" />
                        <SideNavigationItem icon="navigation-right-arrow" text="Pavo" />
                        <SideNavigationItem icon="employee" text="Usuarios" data-route="/usuarios" />
                    </SideNavigation>
                </div>
            )}

            {/* Contenido principal */}
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
                <Card style={{ padding: "1rem", marginBottom: "2rem" }}>
                    <Title level="H5">Agregar Usuario</Title>
                    <FlexBox direction="Row" wrap>
                        <div style={{ marginRight: "1rem", flex: 1 }}>
                            <Label>Nombre</Label>
                            <Input
                                name="nombre"
                                value={nuevoUsuario.nombre}
                                onInput={handleInputChange}
                            />
                        </div>
                        <div style={{ marginRight: "1rem", flex: 1 }}>
                            <Label>Correo</Label>
                            <Input
                                name="correo"
                                value={nuevoUsuario.correo}
                                onInput={handleInputChange}
                            />
                        </div>
                        <div style={{ marginRight: "1rem", flex: 1 }}>
                            <Label>Rol</Label>
                            <Input
                                name="rol"
                                value={nuevoUsuario.rol}
                                onInput={handleInputChange}
                            />
                        </div>
                        <Button icon="add" design="Emphasized" onClick={agregarUsuario}>
                            Agregar
                        </Button>
                    </FlexBox>
                </Card>

                <Card style={{ padding: "1rem" }}>
                    <Title level="H5">Lista de Usuarios</Title>
                    <Table>
                        <ui5-table-column slot="columns"><Label>Nombre</Label></ui5-table-column>
                        <ui5-table-column slot="columns"><Label>Correo</Label></ui5-table-column>
                        <ui5-table-column slot="columns"><Label>Rol</Label></ui5-table-column>
                        <ui5-table-column slot="columns"><Label>Acciones</Label></ui5-table-column>

                        {usuarios.map((usuario) => (
                            <TableRow key={usuario.id}>
                                <TableCell>{usuario.nombre}</TableCell>
                                <TableCell>{usuario.correo}</TableCell>
                                <TableCell>{usuario.rol}</TableCell>
                                <TableCell>
                                    <Button icon="delete" design="Negative" onClick={() => eliminarUsuario(usuario.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </Card>
            </FlexBox>
        </FlexBox>
    );
}
