import './claseIndividualProfesor.css';


import FichaActividad from '../../componentes/fichaActividad/FichaActividad'

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Button, cardHeaderClasses, Link } from "@mui/material";
/* Estilos del boton "Entrar" */
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    width: "144px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "#008080",
    margin: "auto",
    marginTop: "45px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Sarabun, sans-serif",
    "&:hover": {
        backgroundColor: "#218c8c",
    },
}));



export default function ClaseIndividualProfesor(props) {

    return (
        <div className="infoClase">
            <h1>Información de la clase</h1>
            <p>Nombre clase: {props.clase.nombre}</p>
            <p>Descripción {props.clase.descripcion}</p>
            <hr></hr>

            <div className = "infoActividades">
                <h1>Actividades de clase</h1>
                <div className = "contenidoInfoActividades">
                <FichaActividad/>
                <FichaActividad/>
                <FichaActividad/>

                </div>
            </div>

            {/* FORM PROVISIONAL */}
            <div className="crearClase">
            <h1>Crear actividad</h1>
            <hr></hr>

            <div data-aos="fade-down" data-aos-once="true">
                <div className="formulario">
                    <h1 className="login_titleProfesor">Ingrese los datos de la actividad</h1>
                    <form>
                        <p>Nombre de la actividad</p>
                        <input
                            type="text"
                            name="nomClase"
                            required
                        ></input>
                        <p>Descripción</p>
                        <input
                            type="text"
                            name="descripcion"
                            required
                        ></input>
                        <p>Experiencia por victoria</p>
                        <input
                            type="number"
                            name="descripcion"
                            required
                        ></input>
                        <p>Daño por fallar la actividad</p>
                        <input
                            type="number"
                            name="descripcion"
                            required
                        ></input>
                        <p>Fecha de vencimiento</p>
                        <input
                            type="date"
                            name="descripcion"
                            required
                        ></input>

                        <ColorButton variant="contained" type="submit">
                            Crear Clase
                        </ColorButton>
                    </form>
                </div>
            </div>


        </div>
        </div>)

}