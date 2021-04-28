import React from "react";
import "./Map.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import ImageSource from "../../Assets/Images/map.jpg";
import Title from "../../Tool/Title/Title";
import HorizontalLine from "../../Tool/HorizontalLine/HorizontalLine";

const Map=()=>(
    <>
        <section className='map'>
            <Title title='باشگاه ها' />
            <HorizontalLine />
            <div className='mapImg'>
                <img src={ImageSource} />
            </div>
        </section>
    </>
)

export default Map;
