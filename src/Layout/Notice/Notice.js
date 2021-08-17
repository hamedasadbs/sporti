import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Notice.module.scss";

const Notice = (props) => {
  const [aboutText, setAboutText] = useState([]);
  const url = "http://localhost/fantasima/index.php";

  useEffect(() => {
    axios
      .post(
        url,
        JSON.stringify({
          method: "select",
          table: "documents",
        })
      )
      .then((res) => setAboutText(res.data));
  }, []);
  return (
    <>
      <table className={classes.table}>
        <tbody>
          <tr>
            <td>
              {aboutText.map((res) => {
                return <p>{res.text}</p>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Notice;
