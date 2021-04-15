import React from "react";
import "./Map.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ImageSource from "../Assets/Images/map.jpg";

const Map=()=>(
    <>
        <section className="map">
            <h3>باشگاه ها<div className='horizontalLine'></div></h3>
            <div>
                <img src={ImageSource} />
            </div>
        </section>
    </>
)

export default Map;
