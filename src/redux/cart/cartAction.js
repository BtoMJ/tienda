import axios from "axios";
import { jwtDecode } from "jwt-decode";
// const { jwtDecode } = require('jwt-decode');
import { getToken } from '../users/userActions';
import { useDispatch, useSelector } from 'react-redux';

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const LOAD_CART = "LOAD_CART";
export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const FUSION_CART = "FUSION_CART";
export const SELECT_SIZEID="SELECT_SIZEID"



let x
if(localStorage.getItem('token')){
     x = getToken();}
const gId = localStorage.getItem('gId')
const decoded = x?jwtDecode(x): null;
// const decoded = 4
export const addToCart = (id, quantity, price, name, image, Sizes) => async (dispatch) => {
  console.log(id, quantity, price, name, image, Sizes)
  let product = {
    id,
    quantity,
    price,
    name,
    image,
    Sizes
  };
  let user3 = decoded?decoded.user.id: null
  let orderId = JSON.parse(window.localStorage.getItem("orderId"));

  try {
    //  console.log(user3, Sizes,"tomiusersize")
    if (user3) {
      let info = { userId: user3, products: [{ productId: id, quantity, price, name,image, Sizes,SizeId:0 }] }
// console.log(info, orderId,"addlog")
      if (orderId) {
        await axios.put("/orders/updateOrder/" + orderId, info  )
      }
      else {
        let res = await axios.post("/orders/createOrder", info)
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
      }
    }

    else {

      let cart = JSON.parse(localStorage.getItem("cart"));

      if (!cart || !cart.length) {
        quantity = 1;
        localStorage.setItem("cart", JSON.stringify([{ ...product, quantity }]));
      } else {
        let ids = cart.map((e) => e.id);
        if (!ids.includes(id)) {
          quantity = 1;
          cart.push({ ...product, quantity });
        } else {
          for (var item of cart) {
            if (item.id === id) {
              item.quantity = quantity === "add" ? ++item.quantity : quantity;
              item.price = price;
              quantity = item.quantity;
            }
          }
        }

        localStorage.setItem("cart", JSON.stringify(cart));
      }

      dispatch({
        type: ADD_TO_CART,
        payload: JSON.parse(localStorage.getItem("cart")),
      });

    }

  } catch (e) {
    console.log(e);
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {

  try {
    let user3 = decoded?decoded.user.id: null
    let orderId = JSON.parse(localStorage.getItem("orderId"));
    // console.log(user3, id, "tomideletefromcart", orderId)
    if (user3) {
      // console.log(user3, id, "tomideletefromcart")
      let info = { userId: user3, productId: id }// deleteOrder/:id ?como va
      // console.log(info)
     await axios.delete("/orders/deleteOrder/product/" + orderId, { data: { ...info } } )
    }
    else {
    //   let cart = getState().cart.items;
    //   let newCart = cart.filter((e) => e.id !== id);
      dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
      });
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    }
  } catch (error) {
    console.log(error)
  }


  //sweetAlert("Eliminado", "success", "OK", 1000);
};

export const cartReset = () => async (dispatch) => {

  let user4 = decoded?decoded.user.id: null
  let orderId = JSON.parse(localStorage.getItem("orderId"));

  if (user4 && orderId) {

    // console.log("entro aca wey")
    await axios.delete( "/orders/deleteOrder/" + orderId)
    window.localStorage.removeItem("orderId")
  }
  else {
    //sweetAlert("Vaciado", "success", "OK", 1000);
    localStorage.removeItem("cart");
  }

  return dispatch({
    type: CART_RESET,
    payload: {
      items: [],
      total: 0
    }
  });
};


export const changeProductQuantity =
  (id, quantity, price, name, image,Sizes, SizeId) => async (dispatch, getState) => {

    let user5 = decoded?decoded.user.id: null
// console.log(SizeId.SizeId,id,"SizeIdtomi")
    if (user5) {
      let orderId = JSON.parse(localStorage.getItem("orderId"));
      let info = {userId: user5, products: [{ productId: id, quantity, price, name,image, Sizes,SizeId:SizeId.SizeId }] }

      await axios.put("/orders/updateOrder/" + orderId, info)
      // console.log("entro aca wey tomi")
    }
    else {
    //   let cart = getState().cart.items;
    //   for (var item of cart) {
    //     if (item.id === id) {
    //       item.quantity = quantity;
    //     }
    //   }
    //   localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
        type: CHANGE_QUANTITY,
        payload: {
            id,
            quantity
        },
      });
    }
  };

export const loadCart = (user) =>
  async (dispatch) => {
  // if(gId){return}
    let user1 = decoded ?decoded.user.id: null
    // console.log(user1,'tomimix')
    if (user1 || user) {
       
      let orderId = JSON.parse(localStorage.getItem("orderId"));
      // console.log("here", orderId)
      let cart = await axios.get("http://localhost:3001/api/orders/" + orderId)//order solamente
      if(cart.data.status !== "inCart"){//viene del back cart
        let res = await axios.post("/orders/createOrder", {userId:user1})
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
        cart = await axios.get("/orders/" + res.data.orderId)
      }
  console.log(cart.data, "tomiload")
      cart = cart?cart.data.Products.map(e => {
         console.log(cart.data, "talleslogueado")
        return {
          id: e.id,
          quantity: e.OrderDetail.quantity,
          price: e.OrderDetail.price,
          name: e.name,
          image: e.image,
          Sizes: cart.data.products[0].Sizes,
          SizeId:e.OrderDetail.sizeId
        }
      }):[];

      dispatch({
        type: LOAD_CART,
        register: true,
        payload: cart,
      });

    } else {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      dispatch({
        type: LOAD_CART,
        register: false,
        payload: cart,
      });
    }
  };

export const checkout = () => async (dispatch, getState) => {

  const discounts = useSelector(state => state.discountsReducer)
  console.log(discounts)
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart)
  try {
    axios.post("/orders/createOrder", { cart });
  } catch (e) {
    console.log(e);
  }
};

export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};


export const fusionCart = async (id) => {
  try {
    let user2 = decoded?decoded.user.id: null
    let products = JSON.parse(localStorage.getItem("cart"));

    if (products) {

      products = products.map(e => {
        return {
          productId: e.id,
          quantity: e.quantity,
          SizeId: e.SizeId? e.SizeId: null
        }
      })
    }

    if (user2 || id) {
      // console.log(products,user2,id,"tomisubmit")
      if (products?.length > 0) {
        let info = { userId: user2?user2: id, products }
        let res = await axios.post("/orders/createOrder", info)
        // console.log(res,"tomicart")
        if(res.data.status !== "inCart"){
          res = await axios.post("/orders/createOrder", {userId:user2? user2: id})
        }
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
        if (res.data.message === false) {
          await axios.put("/orders/updateOrder/" + res.data.orderId, info)
        }
      }
      else {
        
        let res = await axios.post("/orders/createOrder", { userId: user2?user2: id })
        if(res.data.status !== "inCart"){
          res = await axios.post("/orders/createOrder", {userId:user2? user2: id})
        }
        window.localStorage.setItem("orderId", JSON.stringify(res.data.orderId))
      }
      window.localStorage.removeItem("cart")
    }


  } catch (error) {
    console.log("tiro errooooooorrrrrrrrrrrrrrrrr", error)
  }
};

export const SelectCartSize =  (id, quantity, price, name, image,Sizes, SizeId)=>
 async (dispatch) => {

    let user6 = decoded?decoded.user.id: null

    if (user6) {
      let orderId = JSON.parse(localStorage.getItem("orderId"));
      let info = {userId: user6, products: [{ productId: id, quantity, price, name,image,Sizes,SizeId  }] }

      await axios.put("/orders/updateOrder/" + orderId,  info)
      // console.log("entro aca wey tomi")
    }
    else {
    
    // console.log(id,SizeId,quantity,name,"reduxsizetomi")
    dispatch({
        type: SELECT_SIZEID,
        payload: {
            id,
            SizeId
        },
      });
    }
}




