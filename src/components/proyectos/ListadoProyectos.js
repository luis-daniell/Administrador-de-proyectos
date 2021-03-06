import { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";


const ListadoProyectos = () => {


    //* Extraer proyectos de State inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos } = proyectosContext;

    //! ANTES DEL USEEFFECT NUNCA DEBE A VER UN RETURN
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])
    

    //! Revisar si proyectos tiene contenido 
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    
    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map( proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="tarea"
                    >
                        <Proyecto
                            
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
