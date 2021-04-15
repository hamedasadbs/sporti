import React, { Component } from "react";
import "./HiddenMenu.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

class Header extends Component{

  render(){
    return(
      <>
        <Router>
          <div className="hiddenMenu">
            <i onClick={this.props.close} className="closeHiddenMenu fa fa-close"></i>
            <ul className="rightSide">
              <li><Link to='/Shopping'>حراجی</Link></li>
              <li><Link to='/Clubs'>باشگاه ها</Link></li>
              <li><Link to='/Judgment'>داوری</Link></li>
              <li><Link to='/Matches'>مسابقات</Link></li>
              <li><Link to='/DartiClub'>کلوپ دارتی</Link></li>
              <li><Link to='/Leagues'>لیگ ها</Link></li>
              <li>
                <button onClick={this.props.showSignIn} className="signIn">ورود</button>
              </li>
            </ul>
          </div>
        </Router>
      </>
    )
  }
  
}

export default Header;
