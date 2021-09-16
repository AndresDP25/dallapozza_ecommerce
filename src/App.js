

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer'


function App() {

  const prod = "BURGERS"

  return (
    
      <div className="bg-warning">

        <NavBar/>
           
        <ItemListContainer prod={prod} />
             
        <ItemDetailContainer />

      </div>
    
  )
}

export default App


