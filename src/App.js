import HiddenMenu from "../src/HiddenMenu/HiddenMenu";

import HeadTitle from "../src/HeadTitle/HeadTitle";
import Records from "../src/Records/Records";
import Gallery from "../src/Gallery/Gallery";
import News from "../src/News/News";
import Map from "../src/Map/Map";
import Footer from "../src/Footer/Footer";
import Sign from "../src/Sign/Sign";
import Shopping from "../src/Shopping/Shopping";
import ShopDetails from "../src/shopDetails/shopDetails";
import "./App.css";

import Back from "./Assets/Images/background.svg";
import Circle from "./Assets/Images/Circle.svg";
import Shop from "./Assets/Images/Icon material-shopping-cart.svg";
import Newspaper from "./Assets/Images/Icon awesome-newspaper.svg";
import MapImg from "./Assets/Images/Icon awesome-map-marked-alt.svg";
import mainLogo from "./Assets/Images/mainLogo.svg";
import threeDots from "./Assets/Images/threeDots.png";

import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component{

  state={
    isHiddenMenuShown:false,
    isSignUpShown:false,
    isSignInShown:false
  }

  showHiddenMenu=()=>{
    this.setState({ isHiddenMenuShown:true })
  }

  closeHiddenMenu=()=>{
    this.setState({ isHiddenMenuShown:false })
  }

  showSingUp=()=>{
    this.setState({ isSignUpShown:true })
  }

  showSingIn=()=>{
    this.setState({ isSignInShown:true })
  }

  closeForm=()=>{
    this.setState({ isSignUpShown:false, isSignInShown:false })
  }

  updateDimensions() {
    if(window.innerWidth > 1300) {
      this.setState({ isHiddenMenuShown:false })
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render(){
    return (
      <div className='body'>
        <div className='innerBody'>
          <div className='main'>
            <Router>
            {this.state.isHiddenMenuShown &&
              <div className="hiddenMenu">
                <i onClick={this.closeHiddenMenu} className="closeHiddenMenu fa fa-close"></i>
                <ul className="rightSide">
                  <li><Link to='/Shopping' onClick={this.closeHiddenMenu}>حراجی</Link></li>
                  <li><Link to='/Clubs' onClick={this.closeHiddenMenu}>باشگاه ها</Link></li>
                  <li><Link to='/Judgment' onClick={this.closeHiddenMenu}>داوری</Link></li>
                  <li><Link to='/Matches' onClick={this.closeHiddenMenu}>مسابقات</Link></li>
                  <li><Link to='/DartiClub' onClick={this.closeHiddenMenu}>کلوپ دارتی</Link></li>
                  <li><Link to='/Leagues' onClick={this.closeHiddenMenu}>لیگ ها</Link></li>
                  <li>
                    <button onClick={this.showSingIn} className="signIn">ورود</button>
                  </li>
                </ul>
              </div>
            }
              <header className='header'>
                <nav>
                  <ul className='rightSide'>
                    <div className='mainLogo'>
                      <Link to='/Home'>
                        <span>ایزی دارت</span>
                        <img src={mainLogo} alt="logo" />
                      </Link>
                    </div>
                    <li onClick={this.showHiddenMenu} className='dropdown'><img src={threeDots} /></li>
                    <li><Link to='/Shopping'>حراجی</Link></li>
                    <li><Link to='/Clubs'>باشگاه ها</Link></li>
                    <li><Link to='/Judgment'>داوری</Link></li>
                    <li><Link to='/Matches'>مسابقات</Link></li>
                    <li><Link to='/DartiClub'>کلوپ دارتی</Link></li>
                    <li><Link to='/Leagues'>لیگ ها</Link></li>
                  </ul>
                  <ul className='leftSide'>
                    <li><button onClick={this.showSingIn} className='signInButton'>ورود</button></li>
                  </ul>
                </nav>
              </header>
              <Switch>
                <Route path="/ShoppingDetails" component={ShopDetails} />

                <Route path="/Shopping" component={Shopping} />

                <Route path="/">
                  <HeadTitle show={this.showSingUp} />
                  <img id='back' src={Back} />
                  {this.state.isSignUpShown &&
                    <Sign type='signUp' close={this.closeForm} />
                  }
                  {this.state.isSignInShown &&
                    <Sign type='signIn' close={this.closeForm} />
                  }
                  <Records />
                  <Gallery title='مسابقات' />
                  <img id='circle' src={Circle} />
                  <Gallery title='حراجی' />
                  <img id='shop' src={Shop} />
                  <News />
                  <img id='news' src={Newspaper} />
                  <Map />
                  <img id='map' src={MapImg} />
                </Route>
              </Switch>
            </Router>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
