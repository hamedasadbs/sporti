import React from "react";
import classes from "./Gallery.module.scss";

const Gallery = (props) => (
  <>
    <table className={classes.table}>
      <tbody>
        <tr>
          Gallery
          <span>{props.title}</span>
        </tr>
      </tbody>
    </table>
  </>
);

export default Gallery;
