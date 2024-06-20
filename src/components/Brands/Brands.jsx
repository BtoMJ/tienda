import nike from '../../assets/marcas/nike.png';
import adidas from '../../assets/marcas/adidas2.png';
import off from '../../assets/marcas/off-white.png';
import puma from '../../assets/marcas/puma.png';
import reebok from '../../assets/marcas/reebok.png';
import vans from '../../assets/marcas/vanslogo.png';
import gucci from '../../assets/marcas/gucci.png';
import under from '../../assets/marcas/under.png';
import './Brands.css';

function Brands(){
    return(
        <div className="brands-container centered">
            <h2>Marcas más vendidas</h2>
            <div className='brands-images'>
                <img src={nike} alt="nike logo" />
                <img src={adidas} alt="nike logo" />
                <img src={off} alt="nike logo" />
                <img src={puma} alt="nike logo" />
                <img src={vans} alt="nike logo" />
                <img src={reebok} alt="nike logo" />
                <img src={gucci} alt="nike logo" />
                <img src={under} alt="nike logo" />
            </div>
        </div>
    )
}

export default Brands;