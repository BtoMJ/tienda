
import Product from '../Product/Product';
import './News.css';

function News(){
    return(
        <div className='news-container centered'>
            <h2>Lo más vendido</h2>
            <div className='products-container'>
                <Product 
                    name="Air Force 1 Felt GS"
                    image="https://i.postimg.cc/1z2wL4GC/Air-Force1-Felt-GS.jpg"
                    price= "89.90"
                    rate={4}
                />
                <Product 
                    name="Air Force 1 Gore Tex High White DS"
                    image="https://i.postimg.cc/Dz81j1X4/Air-Force1-Gore-Tex-High-White-DS.jpg"
                    price= "105.25"
                    rate={3}
                />
                <Product 
                    name="Air Max 720 Orange DS"
                    image="https://i.postimg.cc/vmg6LMJW/Air-Max720-Orange-DS.jpg"
                    price= "123.90"
                    rate={2}
                />
                <Product 
                    name="Air Max 1 Terra"
                    image="https://i.postimg.cc/dVSyyDxs/Air-Max1-Terra.jpg"
                    price= "99.25"
                    rate={5}
                />
            </div>
        </div>
    )
}

export default News;

