import { Route, Switch } from "wouter";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Catalog from "./components/Catalog/Catalog";
import Dashboard from "./components/Dashboard/Dashboard";
import Scroll from "./components/Scroll/Scroll";

import './App.css';

function App() {

  return (
    <>
      <div className='app-container'>

        <Scroll />

        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/home/:id" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/admin/dashboard" component={Dashboard}/>
        </Switch>

      </div>
      
    </>
  )
}

export default App
