import React, {Component} from "react";
import "./Shopping.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ImageSource1 from "../Assets/Images/s1.jpeg";
import ImageSource2 from "../Assets/Images/s2.jpeg";
import ImageSource3 from "../Assets/Images/s3.jpeg";
import ImageSource4 from "../Assets/Images/s4.jpeg";

import star from "../Assets/Images/Icon material-star.svg";
import axios from "axios";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

class Shopping extends Component{
    state={
        priceValue:0,
        shoppings:[]
    }

    componentDidMount(){
        axios.get('./test.json')
        .then(res=>{
            const shoppings=res.data.shoppings
            this.setState({shoppings})
        }).catch(err=>{
            alert(err)
        })
    }

    changePriceHandler=(event)=>{
        this.setState({priceValue:event.target.value})
        const demo=document.getElementById('demo')
        demo.innerHTML=event.target.value
    }
    render(){
        let picLength=0
        const picture=this.state.shoppings.map(pic=>{
            return(
                <Link to={`/ShoppingDetails?id=${pic.id}`} key={pic.id}>
                    <div className="picture">
                        <div className="mainImage">
                            <img src={pic.imageSource} alt="Cinque Terre" width="533" height="300" />
                        </div>
                        <div className="caption">
                            <div className='star'>
                                <h2>{pic.title}</h2>
                                <p><img src={star} />{pic.star}</p>
                            </div>
                            <p className='price'>تومان {pic.price}</p>
                        </div>
                    </div>
                </Link>
            )
        })
        return(
            <>
                <section className="shop">
                    <div className='background'></div>
                    <div className='mainShop'>
                        <main className='filter'>
                            <div className='searchButton'>
                                <button>جستجو</button>
                            </div>
                            <div className='search'>
                                <label>جستجو</label>
                                <div className='searchInput'>
                                    <input type="search" placeholder='جستجو براساس نام' />
                                    <i className='fa fa-search'></i>
                                </div>
                            </div>
                            <div className='productDegree'>
                                <label>درجه محصول</label>
                                <select name="productDegree">
                                    <option value="all states">تمام حالت</option>
                                    <option value="all states">تمام حالت</option>
                                    <option value="all states">تمام حالت</option>
                                    <option value="all states">تمام حالت</option>
                                </select>
                            </div>
                            <div className='price'>
                                <label>قیمت (تومان)</label>
                                <div className="slideContainer">
                                    <input onChange={this.changePriceHandler} type="range" min="0" max="120000000" value={this.state.priceValue} />
                                    <p><span id="demo">0</span></p>
                                </div>
                            </div>
                        </main>
                        <section className='categories'>
                            <ul>
                                <li className='disabled'>
                                    <label>دسته بندی</label>
                                </li>
                                <li>
                                    <label>فلایت</label>
                                    <img src={ImageSource2} />
                                </li>
                                <li>
                                    <label>شفت</label>
                                    <img src={ImageSource2} />
                                </li>
                                <li>
                                    <label>دارت</label>
                                    <img src={ImageSource2} />
                                </li>
                                <li>
                                    <label>تخته</label>
                                    <img src={ImageSource2} />
                                </li>
                            </ul>
                        </section>
                        <menu className="gallery">
                            {picture}
                        </menu>
                    </div>
                </section>
            </>
        )
    }
}

export default Shopping;
