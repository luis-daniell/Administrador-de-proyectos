
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from "./context/tareas/tareaState";


function App() {

  return (

    //* Todo lo que se coloque dentro de routes va a ser las paginas
    //TODO: lo que este afuera se va a ver en todas las paginas
    //!
    //? 
    //
    <ProyectoState>
      <TareaState> 
        <Router>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="nueva-cuenta" element={<NuevaCuenta/>} />
            <Route path="proyectos" element={<Proyectos />} />
       
          </Routes>

        </Router>
      </TareaState>
    </ProyectoState>
  )
}

export default App;
