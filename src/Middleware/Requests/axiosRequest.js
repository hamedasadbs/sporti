import axios from "axios";

export async function axiosRequest(url) {
  return axios({
    method: "get",
    url: url,
  })
    .then((res) => res.data.result)
    .catch((err) => {
      throw err;
    });
}
