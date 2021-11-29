

const Barra = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Luis Daniel</span></p>

            <nav className="nav-principal">
                {/* para evitar el enlace se coloca #! */}
                <a href="#!">Cerrar Sesion</a>
            </nav>
        </header>
     );
}
 
export default Barra;