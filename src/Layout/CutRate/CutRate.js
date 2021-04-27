import React, { useState, useEffect } from "react";
import classes from "./CutRate.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import Logic from "../../Logic/Logic";
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
    const [shoppings,setShoppings]=useState(Array)
    const [matches,setMatches]=useState([])

    useEffect(()=>{

        /*this.setState({
            matches:<Logic req='matches' />
        })*/
        axios.get('./test.json')
        .then(res=>{
            const matches=res.data.matches
            const shoppings=res.data.shoppings
            setMatches({matches})
            setShoppings({shoppings})

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
    props.title=='مسابقات' ? picLength=matches.length : picLength=shoppings.length

    props.title=='مسابقات'
    ?
    picture=matches.slice(minSlice,maxSlice).map(pic=>{
    return(
        <div key={pic.id} className={classes.picture}>
            <div className={classes.mainImage}>
                <img src={src} alt="Cinque Terre" width="533" height="300" />
            </div>
            <div className={classes.caption}>
                <h4>{pic.title}</h4>
                <p>
                {pic.text}
                </p>
            </div>
            <div className={classes.buttons}>
                <button className={classes.details}>مشاهده جزئیات</button>
                <button className={classes.signUp}>ثبت نام</button>
            </div>
        </div>
    )
    })
    :
    picture=shoppings.slice(minSlice,maxSlice).map(pic=>{
        return(
            <div key={pic.id} className={classes.picture}>
                <div className={classes.mainImage}>
                    <img src={src} alt="Cinque Terre" width="533" height="300" />
                </div>
                <div className={classes.caption}>
                    <div className={classes.star}>
                        <h2>{pic.title}</h2>
                        <p><img src={star} />{pic.star}</p>
                    </div>
                    <p className={classes.price}>تومان {pic.price}</p>
                </div>
            </div>
        )
    })
        
    let arrowLeftActivate=classes.arrowActive
    let arrowRightActivate=classes.arrowActive

    if(minSlice!=0){
        arrowLeftActivate=classes.arrowNotActive
    }
    if(maxSlice<picLength){
        arrowRightActivate=classes.arrowNotActive
    }
    return(
        <>
            <section className={classes.cutRate}>
                <Title title={props.title} />
                <HorizontalLine />
                <main>
                    <button className={arrowLeftActivate +" "+ classes.arrowLeft} onClick={()=>moveLeft(minSlice)}>
                        <img src={arrowLeft} />
                    </button>
                    {picture}
                    <button className={arrowRightActivate +" "+ classes.arrowRight} onClick={()=>moveRight(maxSlice,picLength)}>
                        <img src={arrowRight} />
                    </button>
                </main>
                <h4>مشاهده همه</h4>
            </section>
        </>
    )
}

export default CutRate;
