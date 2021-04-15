import React, {Component} from "react";
import "./Sign.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Sign extends Component{
    render(){
        const title = this.props.type=='signIn' ? 'شماره موبایل خود را وارد کنید' : 'کد را وارد کنید'
        const placeHolder = this.props.type=='signIn' ? '1234' : '+98'
        const button = this.props.type=='signIn' ? <button className='signIn'>ورود</button> : <button className='sendCode'>ارسال کد</button>

        return(
            <>
                <article className="sign">
                    <div className='title'>
                        <h5>{title}</h5>
                        <i onClick={this.props.close} className="closeForm fa fa-close"></i>
                    </div>
                    <input placeholder={placeHolder} />
                    <div className='buttons'>
                        <button onClick={this.props.close} className='cancel'>انصراف</button>
                        {button}
                    </div>
                </article>
            </>
        )
    }
    
}

export default Sign;
