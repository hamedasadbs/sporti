import React, {Component} from "react";
import "./shopDetails.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ImageSource1 from "../Assets/Images/s1.jpeg";
import ImageSource2 from "../Assets/Images/s2.jpeg";
import ImageSource3 from "../Assets/Images/s3.jpeg";
import ImageSource4 from "../Assets/Images/s4.jpeg";
import axios from "axios";

import star from "../Assets/Images/Icon material-star.svg";

class ShopDetails extends Component{
    state={
        priceValue:0,
        shoppings:[],
        productTitle:null,
        productPrice:null,
        productStation:null,
        productCity:null,
        productCategory:null,
        productExplanation:null
    }

    componentDidMount(){
        axios.get('./test.json')
        .then(res=>{
            const shoppings=res.data.shoppings
            this.setState({shoppings})
            this.state.shoppings.map(product=>{
                if(`?id=${product.id}`==window.location.search){
                    this.setState({
                        productTitle:product.title,
                        productPrice:product.price,
                        productStation:product.station,
                        productCity:product.city,
                        productCategory:product.category,
                        productExplanation:product.explanation
                    })
                }
            })
        })
        .catch(err=>{
            alert(err)
        })
    }
    
    changePriceHandler=(event)=>{
        this.setState({priceValue:event.target.value})
        const demo=document.getElementById('demo')
        demo.innerHTML=event.target.value
    }
    render(){
        return(
            <>
                <section className="shopDetails">
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
                                <div className="mainImage">
                                    <img src={ImageSource1} alt="Cinque Terre" />
                                </div>
                                <div className="mainImage">
                                    <img src={ImageSource1} alt="Cinque Terre" />
                                </div>
                                <div className="mainImage">
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
}

export default ShopDetails;
