import React, {useState, useEffect} from "react";
import classes from "./News.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import ImageSource1 from "../../Assets/Images/s1.jpeg";
import ImageSource2 from "../../Assets/Images/s2.jpeg";
import ImageSource3 from "../../Assets/Images/s3.jpeg";
import ImageSource4 from "../../Assets/Images/s4.jpeg";
import axios from "axios";

import Title from "../../Tool/Title/Title";
import HorizontalLine from "../../Tool/HorizontalLine/HorizontalLine";

const News=()=>{

    const [news,setNews]=useState([])

    useEffect(()=>{
        axios.get('./test.json')
        .then(res=>{
            const news=res.data.news
            setNews(news)
        }).catch(err=>{
            alert(err)
        })
    })

    return(
        <>
            <section className={classes.news}>
                <Title title='اخبار' />
                <HorizontalLine />
                <h4 className={classes.seeMore}>مشاهده همه</h4>
                <div className={classes.leftSide}>
                    <img src={ImageSource1} />
                    <img src={ImageSource2} />
                    <img src={ImageSource3} />
                    <div className={classes.moreNews}>
                        <img src={ImageSource4} />
                        <div className={classes.overlay}></div>
                        <button>
                            <i className='fa fa-arrow-right'></i>
                        </button>
                        <h4>عنوان اخبار</h4>
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <img src={ImageSource1} />
                    <div className={classes.overlay}></div>
                    <h4>عنوان اخبار</h4>
                    <p><strong>چکیده: </strong>این یک مثال است و برای تمرین نوشته شده استوووووووو</p>
                    <button>
                        مشاهده
                    </button>
                </div>
            </section>
        </>
    )
}

export default News;
