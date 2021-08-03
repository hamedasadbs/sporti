import React from "react";
import classes from "./Gallery.module.scss";
import Products from "../Home/Aside/Products/Products";

const Gallery = (props) => (
  <>
    <div className={classes.gallery}>
      <article>
        <Products type='gallery' label={props.label} name={props.name} />
      </article>
      <aside></aside>
    </div>
  </>
);

export default Gallery;
