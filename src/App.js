import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer'


function App() {

  const prod = "BURGERS"

  return (
      <BrowserRouter>
        <div className="bg-warning">

          <NavBar/>
          <Switch> 
            <Route exact path='/' >
              <ItemListContainer prod={prod} />
            </Route>   
            <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
            <Route exact path='/detalle/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
            
          </Switch> 
        </div>
      </BrowserRouter>
  )
}

export default App


