import React, { useState, useEffect } from "react";
import axios from "axios";

const Logic = (props) => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    axios
      .get("./test.json")
      .then((res) => {
        setRes(props.req == "matches" ? res.data.matches : res.data.shoppings);
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return <>{res}</>;
};

export default Logic;
