import React from "react";
import classes from "./Title.module.css";

const Title=(props)=>(
    <>
        <h3 className={classes.title}>{props.title}</h3>
    </>
)

export default Title;