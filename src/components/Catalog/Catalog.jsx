import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "wouter";
import VanillaTilt from "vanilla-tilt";

import Product from '../Product/Product';
import Paginado from "./Paginado";
import PaginadoMobile from "./PaginadoMobile";
import { loadCart } from "../../redux/cart/cartAction";
import { getRatings } from "../../redux/rating/ratingActions";
import {
  getProducts,
  filterBrand,
  filterCategory,
  filtersReset,
  saveFilteredDataBrand,
  saveFilteredDataCategory,
  restoreData,
  orderProducts,
  orderMethod,
} from "../../redux/products/productsAction";
import { getBrands } from "../../redux/brand/brandActions";
import { getCategories } from "../../redux/category/categoriesActions";
import { getDiscounts } from "../../redux/discounts/discountsActions";
import './Catalog.css';


function Catalog(){

    const element = document.querySelectorAll(".card-container");
    VanillaTilt.init(element);

    const gId = localStorage.getItem('gId')

    var intFrameWidth = window.innerWidth;

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
      dispatch(getBrands());
      dispatch(getCategories());
      if(!gId){dispatch(loadCart())};
      dispatch(getRatings());
      dispatch(getDiscounts());
    }, [dispatch]);

    const { products } = useSelector((state) => state.productReducer);
    const { categories } = useSelector((state) => state.categoriesReducer);
    const { brands } = useSelector((state) => state.brandReducer);

    const [currPage, setCurrPage] = useState(1);
    const [cardsxPage] = useState(10);
    const [filtros, setFiltros] = useState([]);
    const [order, setOrder] = useState("name");

    const lastProduct = currPage * cardsxPage;
    const firstProduct = lastProduct - cardsxPage;

    const currProducts = products.slice(firstProduct, lastProduct);

    const paginado = (pagNumber) => {
        setCurrPage(pagNumber);
    };

    /************ PAGINADO PARA MOVILES ************/

    const [currPage2, setCurrPage2] = useState(1);
    const [cardsxPage2, setcardsxPage2] = useState(8);
    
    const lastProduct2 = currPage2 * cardsxPage2
    const firstProduct2 =  lastProduct2 - cardsxPage2;

    const currProducts2 = products.slice(firstProduct2, lastProduct2);
    
    const paginado2 = (pagNumber) => {
        setCurrPage2(pagNumber)
    }

   /************************************************/

   function handleFilterBrand(e) {
    e.preventDefault();
    dispatch(saveFilteredDataBrand(e.target.value));
    dispatch(filterBrand(e.target.value));
    setFiltros([...filtros, e.target.value]);
  }

  function handleFilterCategory(e) {
    e.preventDefault();

    dispatch(saveFilteredDataCategory(e.target.value));
    dispatch(filterCategory(e.target.value));
    setFiltros([...filtros, e.target.value]);
  }

  function handleResetFilters(e) {
    e.preventDefault();
    dispatch(filtersReset());
    setFiltros([]);
    menuCategorias.selectedIndex = 0;
    menuMarcas.selectedIndex = 0;
  }

  const handleOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
    dispatch(orderProducts(e.target.value));
  };

  const handleOrderMethod = (e) => {
    e.preventDefault();
    dispatch(orderMethod(e.target.value, order));
  };

  const deleteFilter = (data) => {
    dispatch(restoreData(data));
    setFiltros([...filtros.filter((item) => data !== item)]);
  };
    
    return(
        <div className='catalog-container centered'>

            <div className='header'>
                {/* <img src={portada} alt='imagen de portada' /> */}
            </div>

            <div className='product-container'>

                <div className='top-bar'>
                    
                    <h1>Filtrar</h1>
                    <div className="select-filter">
                        <h3>Por Categoría</h3>
                        <select className='select-catalogue'>
                            <option>Selecciona una categoría</option>
                        </select>
                    </div>
                    <div className="select-filter">
                        <h3>Por Marca</h3>
                        <select className='select-catalogue'>
                            <option>Selecciona una marca</option>
                        </select>

                    </div>
                    <div className="select-filter">
                        <h3>Por Precio</h3>
                        <select className='select-catalogue'>
                            <option>Selecciona una opción</option>
                            <option>Ascendente</option>
                            <option>Descendente</option>
                        </select>
                    </div>
                    
                </div>
                <div className='shoes'>
                    {
                       intFrameWidth > 575 ?  
                       currProducts &&
                       currProducts.map((product, index) => {
                         return (
                           product && (
                             <Link className="link-catalogue" to={`/catalog/${product.id}`} key={index}>
                               {/* <div className="Shoes" key={index} data-tilt> */}
                                 <Product
                                   id={product.id}
                                   image={product.image}
                                   name={product.name}
                                   price={product.price}
                                   status={product.status}
                                   description={product.description}
                                   Sizes={product.Sizes}
                                   onSale={product.onSale}
                                   discounts={product.Discounts}
                                   rate={4}
                                 />
                               {/* </div> */}
                             </Link>
                           )
                         );
                     }) : 
                        currProducts2 && 
                            currProducts2.map((product, index) => {
                                return (
                                product && (
                                    <Link to={`/catalog/${product.id}`} key={index}>
                                    {/* <div className="Shoes" key={index} data-tilt> */}
                                        <Product
                                            id={product.id}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            status={product.status}
                                            description={product.description}
                                            Sizes={product.Sizes}
                                            onSale={product.onSale}
                                            discounts={product.Discounts} 
                                        />
                                    {/* </div> */}
                                    </Link>)
                                );
                        }) 
                    }
                    <div className="Paginado">
                        {
                            intFrameWidth > 575 ?
                                <Paginado
                                    cardsxPage={cardsxPage}
                                    products={products.length}
                                    paginado={paginado}
                                    currPage={currPage}
                                />
                            :
                                <PaginadoMobile 
                                cardsxPage2={cardsxPage2} 
                                products={products.length}
                                paginado2={paginado2} 
                                currPage={currPage2}
                            />
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Catalog;