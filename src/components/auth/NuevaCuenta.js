import { useState } from "react";
import { Link } from "react-router-dom";


const NuevaCuenta = () => {


    // State para iniciar Sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '', 
        confirmar: ''
    });

    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campo vacios

        // Password minimo de 6 caracteres


        // Revisar que los password sean iguales

        // Pasarlo al action


    }

    return ( 
        <div className="form-usuario">

            <div className="contenedor-form sombra-dark">

                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu Nombre"
                            onChange={onChange}
                        /> 
                    </div>

                    <div className="campo-form">
                        {/* El htmlFor se tiene que llamar igual que el id para que cuando de clic
                            en el input este se habilite
                        */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Correo Electronico"
                            value={email}
                            onChange={onChange}
                        /> 
                    </div>


                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Contraseña"
                            onChange={onChange}
                        /> 
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite tu Contraseña"
                            onChange={onChange}
                        /> 
                    </div>


                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;