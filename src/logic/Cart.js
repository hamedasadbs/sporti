import axios from "axios";

export const addToCart = (username, id) => {
  axios
    .post("http://localhost:8080/addCart", {
      productId: id,
      username: username,
    })
    .then(() => {
      checkTheCart(username);
    });
};

export const decreaseCartHandler = (username, productId) => {
  axios
    .post("http://localhost:8080/decreaseCart", {
      productId: productId,
      username: username,
    })
    .then(() => {
      checkTheCart(username);
    });
};

export const increaseCartHandler = (username, productId) => {
  axios
    .post("http://localhost:8080/increaseCart", {
      productId: productId,
      username: username,
    })
    .then(() => {
      checkTheCart(username);
    });
};

export const deleteCartHandler = (username, productId) => {
  axios
    .delete(
      `http://localhost:8080/cart?username=${username}&productId=${productId}`
    )
    .then(() => {
      checkTheCart(username);
    });
};

export const checkTheCart = async (username) => {
  const response = await axios.get(
    `http://localhost:8080/cart?username=${username}`
  );

  return response.data.dataset[0];
};
