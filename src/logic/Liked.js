import axios from "axios";

export const addToLiked = (username, productId) => {
  axios.post("http://localhost:8080/like", {
    productId: productId,
    username: username,
  });
};
