import React, { useEffect, useState } from "react";
import classes from "./Details.module.scss";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Details = (props) => {
  return (
    <>
      <div className={classes.details}>
        <h1 className={classes.title}>{props.title}</h1>
        <article>
          <div className={classes.images}></div>
          <div className={classes.options}></div>
        </article>
        <main className={classes.extraInfos}></main>
      </div>
    </>
  );
};

export default Details;
