import React, {Component} from "react";
import "./News.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import ImageSource1 from "../Assets/Images/s1.jpeg";
import ImageSource2 from "../Assets/Images/s2.jpeg";
import ImageSource3 from "../Assets/Images/s3.jpeg";
import ImageSource4 from "../Assets/Images/s4.jpeg";
import axios from "axios";
import arrowLeft from "../Assets/Images/Icon awesome-angle-left.svg";
import arrowRight from "../Assets/Images/Icon awesome-angle-right.svg";
import star from "../Assets/Images/Icon material-star.svg";

class News extends Component{
    state={
        news:[]
    }

    componentDidMount(){
        axios.get('./test.json')
        .then(res=>{
            const news=res.data.news
            this.setState({news})
        }).catch(err=>{
            alert(err)
        })
    }

    render(){

        return(
            <>
                <section className="news">
                    <h3 className='title'>اخبار<div className='horizontalLine'></div></h3>
                    <h4 className='seeMore'>مشاهده همه</h4>
                    <div className='leftSide'>
                        <img src={ImageSource1} />
                        <img src={ImageSource2} />
                        <img src={ImageSource3} />
                        <div className='moreNews'>
                            <img src={ImageSource4} />
                            <div className='overlay'></div>
                            <button>
                                <i className='fa fa-arrow-right'></i>
                            </button>
                            <h4>عنوان اخبار</h4>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <img src={ImageSource1} />
                        <div className='overlay'></div>
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
}

export default News;
