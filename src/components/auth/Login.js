import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {


    // State para iniciar Sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;

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

        // Pasarlo al action


    }

    return ( 
        <div className="form-usuario">

            <div className="contenedor-form sombra-dark">

                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >

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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;