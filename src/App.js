import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer'





function App() {

  const nombre ="Andres"
  const appelido ="Dalla Pozza"
  const saludo = "Hola como andas"

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludos={saludo} nombre={nombre} apellido={appelido} />
    </div>
  )
}

export default App


