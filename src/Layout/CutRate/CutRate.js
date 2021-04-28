import React, { useState, useEffect } from "react";
import "./CutRate.scss";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
//import Logic from "../../Logic/Logic";
import axios from "axios";
import arrowLeft from "../../Assets/Images/Icon awesome-angle-left.svg";
import arrowRight from "../../Assets/Images/Icon awesome-angle-right.svg";
import star from "../../Assets/Images/Icon material-star.svg";

import src from "../../Assets/Images/s1.jpeg";

import Title from "../../Tool/Title/Title";
import HorizontalLine from "../../Tool/HorizontalLine/HorizontalLine";


const CutRate=(props)=>{

    const [minSlice,setMinSlice]=useState(0)
    const [maxSlice,setMaxSlice]=useState(3)
    const [shoppings,setShoppings]=useState([])
    const [matches,setMatches]=useState([])

    useEffect(()=>{

        /*this.setState({
            matches:<Logic req='matches' />
        })*/
        
        axios.get('./test.json')
        .then(res=>{
            const match=res.data.matches
            const shopping=res.data.shoppings
            setMatches(match)
            setShoppings(shopping)

        }).catch(err=>{
            alert(err)
        })
    })
    
    const moveRight=(max,maxVal)=>{
        if(max<maxVal){
            this.setState(prevState => ({
                minSlice: prevState.minSlice + 1,
                maxSlice: prevState.maxSlice + 1 
            }))
        }
    }

    const moveLeft=(min)=>{
        if(min>0){
            this.setState(prevState => ({
                minSlice: prevState.minSlice - 1,
                maxSlice: prevState.maxSlice - 1 
            }))
        }
    }

    let picture=''
    let picLength=0
    props.title==='مسابقات' ? picLength=matches.length : picLength=shoppings.length

    props.title==='مسابقات'
    ?
    picture=matches.slice(minSlice,maxSlice).map(pic=>{
    return(
        <div key={pic.id} className='picture'>
            <div className='mainImage'>
                <img src={src} alt="Cinque Terre" width="533" height="300" />
            </div>
            <div className='caption'>
                <h4>{pic.title}</h4>
                <p>
                {pic.text}
                </p>
            </div>
            <div className='buttons'>
                <button className='details'>مشاهده جزئیات</button>
                <button className='signUp'>ثبت نام</button>
            </div>
        </div>
    )
    })
    :
    picture=shoppings.slice(minSlice,maxSlice).map(pic=>{
        return(
            <div key={pic.id} className='picture'>
                <div className='mainImage'>
                    <img src={src} alt="Cinque Terre" width="533" height="300" />
                </div>
                <div className='caption'>
                    <div className='star'>
                        <h2>{pic.title}</h2>
                        <p><img src={star} alt='star' />{pic.star}</p>
                    </div>
                    <p className='price'>تومان {pic.price}</p>
                </div>
            </div>
        )
    })
        
    let arrowLeftActivate='arrowActive'
    let arrowRightActivate='arrowActive'

    if(minSlice!=0){
        arrowLeftActivate='arrowNotActive'
    }
    if(maxSlice<picLength){
        arrowRightActivate='arrowNotActive'
    }
    return(
        <>
            <section className='cutRate'>
                <Title title={props.title} />
                <HorizontalLine />
                <main>
                    <button className={arrowLeftActivate +" arrowLeft"} onClick={()=>moveLeft(minSlice)}>
                        <img src={arrowLeft} />
                    </button>
                    {picture}
                    <button className={arrowRightActivate +" arrowRight"} onClick={()=>moveRight(maxSlice,picLength)}>
                        <img src={arrowRight} />
                    </button>
                </main>
                <h4>مشاهده همه</h4>
            </section>
        </>
    )
}

export default CutRate;
