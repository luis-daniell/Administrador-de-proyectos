import { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

import Tarea from "./Tarea";

const ListadoTareas = () => {

    // Obtener el state 
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Si no hay proyecto seleccionado 
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array Destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;




    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true, },
        {nombre: 'Elegir Colores', estado: false, },
        {nombre: 'Elegir Plataformas de pago', estado: false, },
        {nombre: 'Elegir Hosting', estado: true, }
    ];


    return ( 

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">

                {tareasProyecto.length === 0 ? 
                (<li className="tarea"><p>No hay tareas</p></li>) 
                :
                (tareasProyecto.map( tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                )))
                }


                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={() => eliminarProyecto(proyectoActual.id)}
                >Eliminar Proyecto &times;</button>
            </ul>

            
        </Fragment>

     );
}
 
export default ListadoTareas;