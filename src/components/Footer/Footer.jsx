import logo from '../../assets/LogoBco.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import './Footer.css';

function Footer(){
    return(
        <div className='footer-container'>

            <div className='general'>

                <div className='company'>
                    <div className='info'>
                        <img className='logo-footer' src={logo} alt="logo footer" />
                        <p>
                            Especialistas en zapatillas urbanas de moda, casuales, cómodas
                            y a los mejores precios directo hasta tu hogar.
                        </p>
                    </div>

                </div>
                <div className='menu-products'>
                    <h4>Productos</h4>
                    <ul>
                        <li><a>Catálogo</a></li>
                        <li><a>Marcas</a></li>
                        <li><a>Nuevos</a></li>
                        <li><a>Ofertas</a></li>
                    </ul>
                </div>
                <div className='menu-sections'>
                    <h4>Menú</h4>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Catálogo</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </div>
                <div className='menu-stores'>
                    <h4>Tiendas</h4>
                    <ul>
                        <li><a>CDMX</a></li>
                        <li><a>Cancún</a></li>
                        <li><a>Guadalajara</a></li>
                        <li><a>Monterrey</a></li>
                    </ul>
                </div>
                <div className='social-media-container'>
                    <FacebookIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                    <XIcon className='icon'/>
                </div>

            </div>

            <div className='sign'>

                <div className='author'>
                    © 2024 Drops | Todos los derechos reservados
                </div>
                

            </div>

        </div>
    )
}

export default Footer;