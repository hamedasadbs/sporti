import axios from "axios";

export const addToCart = (username, productId) => {
  axios.post("http://localhost:8080/addCart", {
    productId: productId,
    username: username,
  });
};

export const decreaseCartHandler = (username, productId) => {
  axios.post("http://localhost:8080/decreaseCart", {
    productId: productId,
    username: username,
  });
};

export const increaseCartHandler = (username, productId) => {
  axios.post("http://localhost:8080/increaseCart", {
    productId: productId,
    username: username,
  });
};

export const deleteCartHandler = (username, productId) => {
  axios.delete(
    `http://localhost:8080/cart?username=${username}&productId=${productId}`
  );
};
