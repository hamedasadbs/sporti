import React, {Component} from "react";
import "./Gallery.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import imageSrc1 from "../Assets/Images/s1.jpeg";
import imageSrc2 from "../Assets/Images/s2.jpeg";

import star from "../Assets/Images/Icon material-star.svg";
class Gallery extends Component{
    render(){
        return(
            <>
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">
                        <li id="carousel__slide1" tabIndex="0" class="carousel__slide">
                            <div class="carousel__snapper">
                                <div className="picture">
                                    <div className="mainImage">
                                        <img src={imageSrc1} alt="Cinque Terre" width="533" height="300" />
                                    </div>
                                    <div className="caption">
                                        <div className='star'>
                                            <h2>this is a test</h2>
                                            <p><img src={star} />stars</p>
                                        </div>
                                        <p className='price'>تومان 26000</p>
                                    </div>
                                </div>
                                <div className="picture">
                                    <div className="mainImage">
                                        <img src={imageSrc1} alt="Cinque Terre" width="533" height="300" />
                                    </div>
                                    <div className="caption">
                                        <div className='star'>
                                            <h2>this is a test</h2>
                                            <p><img src={star} />stars</p>
                                        </div>
                                        <p className='price'>تومان 26000</p>
                                    </div>
                                </div>
                                <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide2" tabIndex="0" class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3" tabIndex="0" class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide4" tabIndex="0" class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
                        </li>
                    </ol>
                </section>
            </>
        )
    }
    
}

export default Gallery;
