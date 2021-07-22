import Advertising from "../src/Layout/Home/Article/Advertising/Advertising";
import Products from "../src/Layout/Home/Article/Products/Products";
import Notice from "../src/Layout/Home/Aside/Notice/Notice";
import TopProducts from "../src/Layout/Home/Aside/TopProducts/TopProducts";
import LastProducts from "../src/Layout/Home/Main/LastProducts/LastProducts";

import Dropdown from "./Tool/Dropdown/Dropdown";

import Footer from "../src/Layout/Footer/Footer";

import Sign from "../src/Layout/Home/Sign/Sign";
import Shopping from "../src/Shopping/Shopping";
import ShopDetails from "../src/Shopping/shopDetails/shopDetails";

import "./App.scss";

import mainLogo from "./Assets/Images/logofantas.png";

import React, { useState } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App=()=>{

  const[isHiddenMenuShown,setIsHiddenMenuShown]=useState(false)
  const[isSignUpShown,setIsSignUpShown]=useState(false)
  const[isSignInShown,setIsSignInShown]=useState(false)

  const[isProductTypeOpen,setIsProductTypeOpen]=useState(false)
  const[isProductsOpen,setIsProductsOpen]=useState(false)
  const[isAccountOpen,setIsAccountOpen]=useState(false)
  const[isBasketOpen,setIsBasketOpen]=useState(false)

  const[dropdownClass,setDropdownClass]=useState('horizontal')

  const showHiddenMenu=()=>{
    setIsHiddenMenuShown(true)
  }

  const closeHiddenMenu=()=>{
    setIsHiddenMenuShown(false)
  }

  const disableScroll=()=>{
    let x=window.scrollX
    let y=window.scrollY
    window.onscroll=function(){window.scrollTo(x, y);}
  }

  const showSingIn=()=>{
    setIsSignInShown(true)
    disableScroll()
  }

  const showSingUp=()=>{
    setIsSignUpShown(true)
    disableScroll()
  }

  const closeForm=()=>{
    setIsSignUpShown(false)
    setIsSignInShown(false)
    window.onscroll=function(){}
  }

  const openProductType=()=>{
    if(isProductTypeOpen)
      setIsProductTypeOpen(false)
    else
      setIsProductTypeOpen(true)
  }

  const openProducts=()=>{
    if(isProductsOpen)
      setIsProductsOpen(false)
    else
      setIsProductsOpen(true)
  }

  const openAccount=()=>{
    if(isAccountOpen)
      setIsAccountOpen(false)
    else
      setIsAccountOpen(true)
  }

  const openBasket=()=>{
    if(isBasketOpen)
      setIsBasketOpen(false)
    else
      setIsBasketOpen(true)
  }

  const dropdownHorizontalClass=()=>{
    setDropdownClass('horizontal')
  }

  const dropdownVerticalClass=()=>{
    setDropdownClass('vertical')
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
                <li className='account' onClick={openAccount}>
                  {isAccountOpen
                    ?
                    <i className='fa fa-chevron-down'></i>
                    :
                    <i className='fa fa-chevron-left'></i>
                  }
                  <label> حساب من </label>
                  <i className='fa fa-user-circle-o'></i>
                  {isAccountOpen &&
                    <ul>
                      <button className='login' onClick={showSingIn}>ورود</button>
                      <button className='register' onClick={showSingUp}>عضویت</button>
                    </ul>
                  }
                </li>
                <li className='basket' onClick={openBasket}>
                  {isBasketOpen
                    ?
                    <i className='fa fa-chevron-down'></i>
                    :
                    <i className='fa fa-chevron-left'></i>
                  }
                  <label> سبد من </label>
                  <i className='fa fa-shopping-cart basket'>
                    <div className='carts'>
                      0
                    </div>
                  </i>
                  {isBasketOpen &&
                    <ul>
                      <li>سبد شما خالی است!</li>
                    </ul>
                  }
                </li>
                <li><Link to='/Shopping' onClick={closeHiddenMenu}>خانه</Link></li>
                <li className='products' onClick={openProducts}>
                  <Link to='/Clubs'>
                    {isProductsOpen
                      ?
                      <i className='fa fa-chevron-down'></i>
                      :
                      <i className='fa fa-chevron-left'></i>
                    } محصولات</Link>
                    {isProductsOpen &&
                      <ul>
                        <li>dcvf</li>
                        <li>uyj</li>
                        <li>oil</li>
                      </ul>
                    }
                </li>
                <li className='productType' onClick={openProductType}>
                  <Link to='/Judgment'>
                    {isProductTypeOpen
                      ?
                      <i className='fa fa-chevron-down'></i>
                      :
                      <i className='fa fa-chevron-left'></i>
                    } نوع محصول</Link>
                    {isProductTypeOpen &&
                      <ul>
                        <li>dcvf</li>
                        <li>uyj</li>
                        <li>oil</li>
                      </ul>
                    }
                </li>
                <li><Link to='/Matches' onClick={closeHiddenMenu}>فانتزیآرت</Link></li>
                <li><Link to='/Matches' onClick={closeHiddenMenu}>فانتزیبلاگ</Link></li>
                <li><Link to='/Matches' onClick={closeHiddenMenu}>درباره ما</Link></li>
                <li><Link to='/Matches' onClick={closeHiddenMenu}>ارتباط با ما</Link></li>
                <li className='search'>
                  <button>
                    <i className='fa fa-search'></i>
                  </button>
                  <input spellCheck='false' type='search' placeholder='جست و جوی محصول یا برند' />
                </li>
              </ul>
            </div>
          }
            <header className='header'>
              <nav className='topHeader'>
                <ul className='rightSide'>
                  <li onClick={showHiddenMenu} onMouseOver={dropdownVerticalClass} onMouseOut={dropdownHorizontalClass} className={'dropdown '+dropdownClass}>
                    <i className='fa fa-bars'></i>
                  </li>
                  <div className='mainLogo'>
                    <Link to='/Home'>
                      <img src={mainLogo} alt="logo" />
                      <span>fantasima</span>
                    </Link>
                  </div>
                </ul>
                <ul className='middleSide'>
                  <button className='search'>
                    <i className='fa fa-search'></i>
                  </button>
                  <input spellCheck='false' type='search' placeholder='جست و جوی محصول یا برند' />
                </ul>
                <ul className='leftSide'>
                  <li className='account'>
                    <label>حساب من</label>
                    <i className='fa fa-user-circle-o'></i>
                    <div className='account'>
                      <Dropdown type='account' signInClick={()=>{closeForm(); showSingIn();}} signUpClick={()=>{closeForm(); showSingUp();}} />
                    </div>
                  </li>
                  <li className='basket'>
                    <div className='carts'>
                      0
                    </div>
                    <label>سبد من</label>
                    <i className='fa fa-shopping-cart'></i>
                    <div className='basket'>
                      <Dropdown type='basket' />
                    </div>
                  </li>
                </ul>
              </nav>

              <nav className='bottomHeader'>
                <ul className='rightSide'>
                  <li><Link to='/Shopping'>ارتباط با ما</Link></li>
                  <li><Link to='/Shopping'>درباره ما</Link></li>
                  <li><Link to='/Clubs'>فانتزیبلاگ</Link></li>
                  <li><Link to='/Judgment'>فانتزیآرت</Link></li>
                  <li className='productType'>
                    <div className='productType'>
                      <Dropdown type='productType' />
                    </div>
                    <Link to='/Matches'><i className='fa fa-chevron-down'></i> نوع محصول</Link>
                  </li>
                  <li className='products'>
                    <Link to='/DartiClub'><i className='fa fa-chevron-down'></i> محصولات</Link>
                    <div className='products'>
                      <Dropdown type='products' />
                    </div>
                  </li>
                  <li className='home'><Link to='/Leagues'>خانه</Link></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/ShoppingDetails" component={ShopDetails} />

              <Route path="/Shopping">
                <Shopping />
              </Route>

              <Route path="/">
                <Advertising click={()=>{closeHiddenMenu(); closeForm(); window.scrollTo(0,0); showSingUp()}} />
                <Products />
                <Notice />
                <TopProducts />
                {isSignUpShown &&
                  <Sign type='signUp' close={closeForm} />
                }
                {isSignInShown &&
                  <Sign type='signIn' close={closeForm} />
                }
                <LastProducts title='آخرین کتاب ها' />
                
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