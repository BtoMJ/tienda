import { Link, Route, Switch } from "wouter";
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/LogoBco.png";
import './Nav.css';

function Nav (){
    return(
        <div className='nav-container'>

            <div className='logo-container'>
                <img className="logo" src={logo} alt="logo" />
            </div>

            <div className='menu-central-container'>
                <ul>
                    <li><a href="#home">inicio</a></li>
                    <li><Link className="link-nav" href="/catalog">catálogo</Link></li>
                    <li><a href="#about">nosotros</a></li>
                    <li><a href="#contact">contacto</a></li>
                </ul>
            </div>

            <div className='menu-lateral-container'>

                <Badge 
                badgeContent={1} 
                sx={{
                    "& .MuiBadge-badge": {
                        color: '#FFFFFF',
                        backgroundColor: "#C8000C",
                    }
                }}
                >
                    <ShoppingCartIcon 
                    className="icon-nav-bar"
                    sx={{
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        fontSize: '1.7rem',
                        transition: '.5s all ease-in-out',
                        "&:hover":{
                            transform: 'scale(1.1)'
                        }
                    }} />
                </Badge>
                <Link href="/login">
                    <AccountCircleIcon 
                    className="icon-nav-bar"
                        sx={{
                            color: '#FFFFFF', 
                            marginLeft: 5,
                            cursor: 'pointer',
                            fontSize: '2.2rem',
                            transition: '.5s all ease-in-out',
                            "&:hover":{
                                color: '#C8000C',
                                transform: 'scale(1.1)'
                            }
                        }} 

                    />
                </Link>

            </div>

        </div>
    )
}

export default Nav;