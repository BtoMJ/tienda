import { SiPuma } from "react-icons/si";
import { MdLogout, MdDashboard, MdCategory } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { GiRunningShoe } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

import { Link } from "wouter";

import logo from '../../../assets/Logo.png';
import './NavBar.css';

function NavBar(){
    return(
        <>
            <div className="logo-dashboard">
                <img src={logo} alt='Logo Dashboard' />
            </div>

            <div className='item-menu-container'>

                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/home">
                        <MdDashboard className='item-menu-icon'/>Home
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/offer">
                        <BiSolidOffer className='item-menu-icon'/>Ofertas
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/products">
                        <GiRunningShoe className='item-menu-icon'/>Productos
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/categories">
                        <MdCategory className='item-menu-icon'/>Categorías
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/brands">
                        <SiPuma className='item-menu-icon'/>Marcas
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/users">
                        <HiUsers className='item-menu-icon'/>Usuarios
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/admin/reports">
                        <TbReportAnalytics className='item-menu-icon'/>Reportes
                    </Link>
                </div>
                <div className="item-menu">
                    <Link className="link-nav-dashboard" href="/">
                        <MdLogout className='item-menu-icon'/>Salir
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;