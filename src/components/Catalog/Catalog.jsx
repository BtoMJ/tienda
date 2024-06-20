import portada from '../../assets/cat/portada.jpg';
import Nav from '../Nav/Nav';
import axios from 'axios';
import './Catalog.css';

async function getProducts (){
    const products = await axios.get('http://localhost:3001/api/products')
    console.log(products.data)
}

 function Catalog(){
    return(
        <div className='catalog-container centered'>
            <Nav />
            <div className='header-image'>
                <img src={portada} alt='imagen de portada' />

               <button onClick={getProducts}>traer productos</button>
            </div>
        </div>
    )
}

export default Catalog;