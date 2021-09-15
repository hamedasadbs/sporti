import React, { useState, useEffect } from "react";
import axios from "axios";

export const Logic = () => {
  const myData = ["hamed", "saeid"];
  axios
    .post(
      "http://localhost/bsShop/gallery.php",
      JSON.stringify({
        method: "gallery",
        selected: "brand",
      })
    )
    .then((res) => myData.push(res.data));
  return myData;
};
