import './App.css';
import logoDigitalShopping from './Imagenes/logoD.jpeg'
import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='frecodecamp-logo-contenedor'>
        <img 
          src={ logoDigitalShopping }
          className='freecodecamp-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
