import React, {useState, useEffect} from "react";
import "./shopDetails.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import ImageSource1 from "../../Assets/Images/s1.jpeg";
import ImageSource2 from "../../Assets/Images/s2.jpeg";
import ImageSource3 from "../../Assets/Images/s3.jpeg";
import ImageSource4 from "../../Assets/Images/s4.jpeg";
import axios from "axios";

import star from "../../Assets/Images/Icon material-star.svg";

const ShopDetails=()=>{

    const [priceValue,setPriceValue]=useState(0)
    const [shoppings,setShoppings]=useState([])
    const [productTitle,setProductTitle]=useState(null)
    const [productPrice,setProductPrice]=useState(null)
    const [productStation,setProductStation]=useState(null)
    const [productCity,setProductCity]=useState(null)
    const [productCategory,setProductCategory]=useState(null)
    const [productExplanation,setProductExplanation]=useState(null)

    useEffect(() => {
        axios.get('./test.json')
        .then(res=>{
            const shoppings=res.data.shoppings
            setShoppings({shoppings})
            shoppings.map(product=>{
                if(`?id=${product.id}`==window.location.search){
                    setProductTitle(product.title)
                    setProductPrice(product.price)
                    setProductStation(product.station)
                    setProductCity(product.city)
                    setProductCategory(product.category)
                    setProductExplanation(product.explanation)
                }
            })
        })
        .catch(err=>{
            alert(err)
        })
    })
    
    const changePriceHandler=(event)=>{
        setPriceValue(event.target.value)
        const demo=document.getElementById('demo')
        demo.innerHTML=event.target.value
    }


    return(
        <>
            <section className='shopDetails'>
                <div className='background'></div>
                <main>
                    <div className='caption'>
                        <div className='head'>
                            <div className='star'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <div className='title'>{this.state.productTitle}</div>
                        </div>
                        <div className='secondHead'>
                            <div className='category'>
                                <p>
                                    دسته بندی:
                                    <span> {this.state.productCategory}</span>
                                </p>
                            </div>
                            <div className='station'>{this.state.productStation} / {this.state.productCity}</div>
                        </div>
                        <div className='price'>
                            <p>
                                قیمت:
                                <span> {this.state.productPrice} </span>
                                تومان
                            </p>
                        </div>
                        <div className='explanation'>
                            <p>
                                توضیحات کالا:
                                <span>  {this.state.productExplanation} </span>
                            </p>
                        </div>
                        <div className='contact'>
                            <button>اطلاعات تماس</button>
                        </div>
                    </div>

                    <div className='pictures'>
                        <img className='productImage' src={ImageSource1} />
                        <div className='slideImages'>
                            <button>
                                <i className='fa fa-chevron-left'></i>
                            </button>
                            <div className='mainImage'>
                                <img src={ImageSource1} alt="Cinque Terre" />
                            </div>
                            <div className='mainImage'>
                                <img src={ImageSource1} alt="Cinque Terre" />
                            </div>
                            <div className='mainImage'>
                                <img src={ImageSource1} alt="Cinque Terre" />
                            </div>
                            <button>
                                <i className='fa fa-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default ShopDetails;
