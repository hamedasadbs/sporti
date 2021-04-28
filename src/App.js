import HeadTitle from "../src/Layout/HeadTitle/HeadTitle";
import Records from "../src/Layout/Records/Records";
import CutRate from "../src/Layout/CutRate/CutRate";
import News from "../src/Layout/News/News";
import Map from "../src/Layout/Map/Map";
import Footer from "../src/Layout/Footer/Footer";


import Sign from "../src/Sign/Sign";
import Shopping from "../src/Shopping/Shopping";
import ShopDetails from "../src/Shopping/shopDetails/shopDetails";

import "./App.scss";

import Back from "./Assets/Images/background.svg";
import Circle from "./Assets/Images/Circle.svg";
import Shop from "./Assets/Images/Icon material-shopping-cart.svg";
import Newspaper from "./Assets/Images/Icon awesome-newspaper.svg";
import MapImg from "./Assets/Images/Icon awesome-map-marked-alt.svg";
import mainLogo from "./Assets/Images/mainLogo.svg";

import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App=()=>{

  const[isHiddenMenuShown,setIsHiddenMenuShown]=useState(false)
  const[isSignUpShown,setIsSignUpShown]=useState(false)
  const[isSignInShown,setIsSignInShown]=useState(false)

  const showHiddenMenu=()=>{
    setIsHiddenMenuShown(true)
  }

  const closeHiddenMenu=()=>{
    setIsHiddenMenuShown(false)
  }

  const showSingUp=()=>{
    setIsSignUpShown(true)
  }

  const showSingIn=()=>{
    setIsSignInShown(true)
  }

  const closeForm=()=>{
    setIsSignUpShown(false)
    setIsSignInShown(false)
  }

  return (
    <div className='body'>
      <div className='innerBody'>
        <div className='main'>
          <Router>
          {isHiddenMenuShown &&
            <div className='hiddenMenu'>
              <i onClick={closeHiddenMenu} className="closeHiddenMenu fa fa-close"></i>
              <ul className='rightSide'>
                <li><Link to='/Shopping' onClick={closeHiddenMenu}>حراجی</Link></li>
                <li><Link to='/Clubs' onClick={closeHiddenMenu}>باشگاه ها</Link></li>
                <li><Link to='/Judgment' onClick={closeHiddenMenu}>داوری</Link></li>
                <li><Link to='/Matches' onClick={closeHiddenMenu}>مسابقات</Link></li>
                <li><Link to='/DartiClub' onClick={closeHiddenMenu}>کلوپ دارتی</Link></li>
                <li><Link to='/Leagues' onClick={closeHiddenMenu}>لیگ ها</Link></li>
                <li>
                  <button onClick={()=>{closeForm(); showSingIn(); closeHiddenMenu()}} className='signIn'>ورود</button>
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
                  <li onClick={showHiddenMenu} className='dropdown'><i className='fa fa-bars'></i></li>
                  <li><Link to='/Shopping'>حراجی</Link></li>
                  <li><Link to='/Clubs'>باشگاه ها</Link></li>
                  <li><Link to='/Judgment'>داوری</Link></li>
                  <li><Link to='/Matches'>مسابقات</Link></li>
                  <li><Link to='/DartiClub'>کلوپ دارتی</Link></li>
                  <li><Link to='/Leagues'>لیگ ها</Link></li>
                </ul>
                <ul className='leftSide'>
                  <li><button onClick={()=>{closeForm(); showSingIn()}} className='signInButton'>ورود</button></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/ShoppingDetails" component={ShopDetails} />

              <Route path="/Shopping" component={Shopping} />

              <Route path="/">
                <HeadTitle click={()=>{closeHiddenMenu(); closeForm(); window.scrollTo(0,0); showSingUp()}} />
                <img className='back' src={Back} alt='back' />
                {isSignUpShown &&
                  <Sign type='signUp' close={closeForm} />
                }
                {isSignInShown &&
                  <Sign type='signIn' close={closeForm} />
                }
                <Records />
                <CutRate title='مسابقات' />
                <img className='circle' src={Circle} alt='circle' />
                <CutRate title='حراجی' />
                <img className='shop' src={Shop} alt='shop' />
                <News />
                <img className='news' src={Newspaper} alt='news' />
                <Map />
                <img className='map' src={MapImg} alt='map' />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
