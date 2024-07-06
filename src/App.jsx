import { Route, Switch } from "wouter";

import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Catalog from "./components/Catalog/Catalog";
import Dashboard from "./components/Dashboard/Dashboard";
import Scroll from "./components/Scroll/Scroll";

import Register from "./components/Register/Register";
import Offer from "./components/Dashboard/Offer/Offer";
import Brands from "./components/Dashboard/Brands/Brands";
import Products from "./components/Dashboard/Products/Products";
import Categories from "./components/Dashboard/Categories/Categories";
import Users from "./components/Dashboard/Users/Users";
import Reports from "./components/Dashboard/Reports/Reports";
import NavBar from "./components/Dashboard/NavBar/NavBar";
import HomeDash from "./components/Dashboard/HomeDash/HomeDash";
import './App.css';

function App() {

  return (
    <>
      <div className='app-container'>

        <Scroll />

        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/admin" component={Admin}/>

          <div className="dashboard-container">
            <div className="nav-dashboard-container">
              <Route path="/admin/*" component={NavBar}/>
            </div>
            <div className="data-container">
              <Route path="/admin/home" component={HomeDash}/>
              <Route path="/admin/offer" component={Offer}/>
              <Route path="/admin/products" component={Products}/>
              <Route path="/admin/categories" component={Categories}/>
              <Route path="/admin/brands" component={Brands}/>
              <Route path="/admin/users" component={Users}/>
              <Route path="/admin/reports" component={Reports}/>
            </div>
          </div>
        </Switch>

      </div>
      
    </>
  )
}

export default App
