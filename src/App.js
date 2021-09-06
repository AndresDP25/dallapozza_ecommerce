import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer'





function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer nombre="Andres" />
    </div>
  )
}

export default App


