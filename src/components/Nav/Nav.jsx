import { Link, useLocation, useParams } from "wouter";
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/LogoBco.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';

function Nav (){

    const [location, setLocation] = useLocation();
    const params = useParams();
    console.log("PARAMS: ",params)

    function openMenu(){

        const menuMobile = document.getElementById('menu-mobile-container');
        menuMobile.style.top = 0;
    
    }
    
    function closeMenu(){
    
        const menuMobile = document.getElementById('menu-mobile-container');
        menuMobile.style.top = "-100vh";
    
    }

    return(
        <>
            <div id="nav-container" className='nav-container' >

                <div className='logo-container'>
                    <img className="logo" src={logo} alt="logo" />
                </div>

                <div className="items-mobile">
                    <div className="cart-mobile">
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
                                fontSize: '1.5rem',
                                transition: '.5s all ease-in-out',
                                "&:hover":{
                                    transform: 'scale(1.1)'
                                }
                            }} />
                        </Badge>
                    </div>
                    <div className="open-container">
                        <button onClick={()=>openMenu()} className="btn-open"><MenuIcon /></button>
                    </div>
                </div>


                <div className='menu-central-container'>
                    <ul>
                        <li><Link href="/">inicio</Link></li>
                        <li><Link className="link-nav" href="/catalog">catálogo</Link></li>
                        <li><a className={`${location === '/catalog' ? 'disabled':''}`} href="#about">nosotros</a></li>
                        {/* <li><a href="/#about">nosotros</a></li> */}
                        <li><a className={`${location === '/catalog' ? 'disabled':''}`} href="#contact">contacto</a></li>
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

            <div className="menu-mobile-container" id="menu-mobile-container">

                <div className="close-container">
                    <button onClick={()=>closeMenu()}  className="btn-close"><CloseIcon /></button>
                </div>

                <div className='menu-mobile'>
                    <ul>
                        <li><a onClick={()=>closeMenu()} href="#slider">inicio</a></li>
                        <li><Link className="link-nav" href="/catalog">catálogo</Link></li>
                        <li><a onClick={()=>closeMenu()} href="#about">nosotros</a></li>
                        <li><a onClick={()=>closeMenu()} href="#contact">contacto</a></li>
                        <li><Link className="link-nav" href="/login">login</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Nav;