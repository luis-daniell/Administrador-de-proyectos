import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

const Sidebar = () => {
    return ( 
        <aside>

            <h1>MERN <span>Tasks</span></h1>

            <NuevoProyecto/>


            <div className="proyectos">
                <h2>Tus proyectos</h2>
            </div>

            <ListadoProyectos/>
            

        </aside>
     );
}
 
export default Sidebar;