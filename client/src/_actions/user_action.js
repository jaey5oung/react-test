import axios from "axios";
import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  ADD_TO_MOVIE,
  GET_MOVIE_ITEMS,
  REMOVE_MOVIE_ITEM,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  ON_SUCCESS_BUY,
  REMOVE_PRODUCT,
} from "./types";

export function loginUser(dataToSubmit) {
  //node로 정보 보내기
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  //node로 정보 보내기
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: REGISTER_USER,
    payload: request,
  };
}

//get메소드는 body부분이 필요없다.
export function auth() {
  //node로 정보 보내기
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: AUTH_USER,
    payload: request,
  };
}

export function addToMovie(objectId) {
  let body = {
    objId: objectId,
  };

  //node로 정보 보내기
  const request = axios
    .post("/api/users/addToMovie", body)
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: ADD_TO_MOVIE,
    payload: request,
  };
}

export function addToCart(id) {
  let body = {
    productId: id,
  };

  const request = axios
    .post("/api/users/addToCart", body)
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getMovieItems(movieObjIds, userMovie) {
  //node로 정보 보내기
  const request = axios
    .get(`/api/reservation/reservation_by_id?id=${movieObjIds}&type=array`)
    .then((response) => {
      return response.data;
    });

  return {
    //request를 reducer로 넘기는 작업
    type: GET_MOVIE_ITEMS,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      //CartItem들에 해당하는 정보들을
      //product collection에서 가져온후에
      //Quantity 정보를 넣어 준다.
      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, index) => {
          if (cartItem.id === productDetail._id) {
            response.data[index].quantity = cartItem.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    //request를 reducer로 넘기는 작업
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export function removeMovieItem(movieObjId) {
  //node로 정보 보내기
  const request = axios
    .get(`/api/users/removeFromMovie?id=${movieObjId}`)
    .then((response) => {
      return response.data;
    });

  return {
    //request를 reducer로 넘기는 작업
    type: REMOVE_MOVIE_ITEM,
    payload: request,
  };
}

export function removeCartItem(productId) {
  //node로 정보 보내기
  const request = axios
    .get(`/api/users/removeFromCart?id=${productId}`)
    .then((response) => {
      //productInfo, cart 정보를 조합해서 CartDetail을 만든다.
      response.data.cart.forEach((item) => {
        response.data.productInfo.forEach((product, index) => {
          if (item.id === product._id) {
            response.data.productInfo[index].quantity = item.quantity;
          }
        });
      });

      return response.data;
    });

  return {
    //request를 reducer로 넘기는 작업
    type: REMOVE_CART_ITEM,
    payload: request,
  };
}

export function onSuccessBuy(data) {
  //node로 정보 보내기
  const request = axios
    .post(`/api/users/successBuy`, data)
    .then((response) => response.data);

  return {
    //request를 reducer로 넘기는 작업
    type: ON_SUCCESS_BUY,
    payload: request,
  };
}

export function removeProduct(id){
  console.log("remove");

  return {
    type: REMOVE_PRODUCT,
  }
}