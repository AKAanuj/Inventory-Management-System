import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import SideNav from './components/sidenav';
import AddProduct from "./components/Home/AddProduct";
import Inventory from "./components/Home/Inventory";
import Details from "./components/Home/moreDetails";
import Variants from "./components/Home/variants";
import ProductTable from "./components/Products/productstable";

import {Switch,Route} from 'react-router';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="container-fluid">
      <div style={{marginTop:10}} className="row">
        <span style={{backgroundColor:"blue",padding:0}} className="col-sm-2"><SideNav/></span>
        <div style={{margin:10,borderRadius:4}} className="col-sm-9">

        <Switch>
        <Route path="/Home" component={AddProduct} />
        <Route path="/Products" component={ProductTable} />
        </Switch>

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
