import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer'


function App() {

  const prod = "BURGERS"

  return (
    <div className="bg-warning vh-100">
      <NavBar/>
      <ItemListContainer prod={prod} />
    </div>
  )
}

export default App


