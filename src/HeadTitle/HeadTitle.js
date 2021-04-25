import React, {Component} from "react";
import "./HeadTitle.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import theMan from "../Assets/Images/16847696.svg";

class HeadTitle extends Component{
    render(){
        return (
            <>
                <article className='headTitle'>
                    <div className='rightSide'>
                        <img src={theMan} />
                    </div>
                    <div className='leftSide'>
                        <h1>با ایزی دارت هدف هاتو نشونه بگیر</h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد<br/>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است<br/>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط
                        </p>
                        <button onClick={this.props.click} className='signUp'>عضویت</button>
                    </div>
                </article>
            </>
        )
    }
};

export default HeadTitle;
