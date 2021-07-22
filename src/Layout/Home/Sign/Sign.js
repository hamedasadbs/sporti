import React, {useState, useEffect} from "react";
import classes from "./Sign.module.scss";
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import axios from "axios";

const Sign=(props)=>{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const changeUserHandler=(e)=>{
        setUsername(e.target.value)
    }

    const changePassHandler=(e)=>{
        setPassword(e.target.value)
    }

    const signIn=()=>{
        axios.get('http://176.9.197.36:7011/api/User/login?userName='+username+'&password='+password+'clientID=panel')
        .then(res=>{
            alert(res.data)
        })
        .catch(err=>{
            alert(err)
        },[])
    }
    const main=props.type=='signIn'
    ?
    <>
        <span className={classes.title}>
            <i onClick={props.close} className={`${classes.closeHiddenMenu} fa fa-close`}></i>
            ورود به حساب کاربری
        </span>
        <main>
            <div className={classes.signInUser}>
                <input />
                <i className='fa fa-user-circle'></i>
            </div>
            <div className={classes.signInPass}>
                <input />
                <i className='fa fa-key'></i>
            </div><br />
            <button>ورود</button>
            <h5 className={classes.rememberMe}>
                <input type='checkbox' />مرا به خاطر بسپار
            </h5>
            <a href='/' className={classes.reUser}>نام کاربری را فراموش کرده ام</a>
            <a href='/' className={classes.rePass}>رمز عبور را فراموش کرده ام</a>
        </main>
    </>
    :
    <>
        <span className={classes.title}>
            <i onClick={props.close} className={`${classes.closeHiddenMenu} fa fa-close`}></i>
            ایجاد حساب کاربری
        </span>
        <main>
            <div className={classes.name}>
                <input />
                <i className='fa fa-user-circle'></i>
            </div>
            <div className={classes.signUpUser}>
                <input />
                <i className='fa fa-user-circle'></i>
            </div>
            <div className={classes.email}>
                <input />
                <i className='fa fa-envelope'></i>
            </div>
            <div className={classes.signUpPass}>
                <input />
                <i className='fa fa-key'></i>
            </div>
            <h5 className={classes.rememberMe}>
                <input type='checkbox' />من ربات نیستم
            </h5>
            <button>ثبت</button>
        </main>
    </>

    return(
        <>
            <article className={classes.sign}>
                {main}
            </article>
        </>
    )
    
}

export default Sign;
