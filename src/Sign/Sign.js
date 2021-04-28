import React from "react";
import "./Sign.scss";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import axios from "axios";
const Sign=(props)=>{

    const signIn=()=>{
        const username=document.getElementById('username')
        const password=document.getElementById('password')
        axios.get('http://176.9.197.36:7011/api/User/login?userName='+username.value+'&password='+password.value+'clientID=panel')
        .then(res=>{
            alert(res.data)
        })
        .catch(err=>{
            alert(err)
        })
    }
    const title = props.type=='signIn' ? 'اطلاعات کاربری خود را وارد کنید' : 'کد را وارد کنید'
    const button = props.type=='signIn' ? <button className='signIn' onClick={signIn}>ورود</button> : <button className='sendCode'>ارسال کد</button>

    return(
        <>
            <article className='sign'>
                <div className='title'>
                    <h5>{title}</h5>
                    <i onClick={props.close} className="closeForm fa fa-close"></i>
                </div>
                <input type='text' id='username' placeholder='Username' />
                <input type='password' id='password' placeholder='Password' />
                <div className='buttons'>
                    <button onClick={props.close} className='cancel'>انصراف</button>
                    {button}
                </div>
            </article>
        </>
    )
    
}

export default Sign;
