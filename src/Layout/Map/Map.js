import React from "react";
import classes from "./Map.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import ImageSource from "../../Assets/Images/map.jpg";
import Title from "../../Tool/Title/Title";
import HorizontalLine from "../../Tool/HorizontalLine/HorizontalLine";

const Map=()=>(
    <>
        <section className={classes.map}>
            <Title title='باشگاه ها' />
            <HorizontalLine />
            <div className={classes.mapImg}>
                <img src={ImageSource} />
            </div>
        </section>
    </>
)

export default Map;
