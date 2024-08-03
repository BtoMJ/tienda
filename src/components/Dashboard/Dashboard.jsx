import { Route, Switch } from "wouter";
import './Dashboard.css';

import NavBar from "./NavBar/NavBar";

function Dashboard(){
    return(
        <div className='dashboard-container'>

            <div className='menu-dashboard-container'>
                <NavBar />
            </div>

                <div className='data-dashboard-container'>
                   
                </div>

        </div>
    )
}

export default Dashboard;