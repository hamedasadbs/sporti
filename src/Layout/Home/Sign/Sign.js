import React, {useState, useEffect} from "react";
import classes from "./Sign.module.scss";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey,faUser,faEnvelope, faWindowClose } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon onClick={props.close} icon={faWindowClose} className={classes.closeHiddenMenu} />
            ورود به حساب کاربری
        </span>
        <main>
            <div className={classes.signInUser}>
                <input />
                <FontAwesomeIcon icon={faUser} className={classes.i} />
            </div>
            <div className={classes.signInPass}>
                <input />
                <FontAwesomeIcon icon={faKey} className={classes.i} />
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
            <FontAwesomeIcon onClick={props.close} icon={faWindowClose} className={classes.closeHiddenMenu} />
            ایجاد حساب کاربری
        </span>
        <main>
            <div className={classes.name}>
                <input />
                <FontAwesomeIcon icon={faUser} className={classes.i} />
            </div>
            <div className={classes.signUpUser}>
                <input />
                <FontAwesomeIcon icon={faUser} className={classes.i} />
            </div>
            <div className={classes.email}>
                <input />
                <FontAwesomeIcon icon={faEnvelope} className={classes.i} />
            </div>
            <div className={classes.signUpPass}>
                <input />
                <FontAwesomeIcon icon={faKey} className={classes.i} />
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
