import React from "react";
import "./Records.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Refs from "../Assets/Images/Refs.svg";
import Clubs from "../Assets/Images/Clubs.svg";
import Players from "../Assets/Images/Players.svg";

const Records=()=>(
    <>
        <section className="records">
            <div>
                <img src={Players} />
                <h1>بازیکنان</h1>
                <span>560,000</span>
            </div>
            <div>
                <img src={Clubs} />
                <h1>باشگاه ها</h1>
                <span>15</span>
            </div>
            <div>
                <img src={Refs} />
                <h1>داوران</h1>
                <span>200</span>
            </div>
        </section>
    </>
)

export default Records;
