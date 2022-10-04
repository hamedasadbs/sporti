/*INNER COMPONENT*/
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Context } from "./logic/Context";
/*STYLE*/
import "./App.scss";
/*CHILD COMPONENT*/
import { Header } from "./layout/header/Header";
import { Home } from "../src/pages/home/Home";
import { Menu } from "./layout/menu/Menu";
import { Sign } from "../src/components/sign/Sign";
import { Gallery } from "../src/pages/gallery/Gallery";
import { Notice } from "../src/layout/notice/Notice";
import { Footer } from "./layout/footer/Footer";
/*LIBRARY*/
import * as cookieLib from "./logic/Cookie";

export const App = () => {
  /*STATE*/
  const [username, setUsername] = useState(cookieLib.getCookie("username"));
  const [login, setLogin] = useState(cookieLib.getCookie("login"));
  const [page, setPage] = useState("home");
  const [sportsData, setSportsData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [productKindData, setProductKindData] = useState([]);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [cart, setCart] = useState([]);
  /*VARIABLE*/
  const cartURL = "http://localhost/bsShop/cart.php";
  const context = {
    usernameCon: [username, setUsername],
    loginCon: [login, setLogin],
    pageCon: [page, setPage],
    menuCon: [isMenuShown, setIsMenuShown],
    signCon: [isSignShown, setIsSignShown],
    typeCon: {
      sports: [sportsData, setSportsData],
      brands: [brandsData, setBrandsData],
      productType: [productTypeData, setProductTypeData],
      productKind: [productKindData, setProductKindData],
    },
  };
  /*FUNCTION*/
  const checkTheCart = () => {
    axios
      .post(
        cartURL,
        JSON.stringify({
          method: "checkTheCart",
          username: cookieLib.getCookie("username"),
        })
      )
      .then((res) => setCart(res.data));
  };

  useEffect(() => {
    if (cookieLib.getCookie("login")) {
      checkTheCart();
    }
  }, []);

  useEffect(() => {
    axios
      .post(`http://localhost:8080/type`, {
        list: "category,fa_category",
      })
      .then((res) => setSportsData(res.data.dataset));
    axios
      .post(`http://localhost:8080/type`, {
        list: "brand",
      })
      .then((res) => setBrandsData(res.data.dataset));
    axios
      .post(`http://localhost:8080/type`, {
        list: "type,fa_type",
      })
      .then((res) => setProductTypeData(res.data.dataset));
    axios
      .post(`http://localhost:8080/type`, {
        list: "kind",
      })
      .then((res) => setProductKindData(res.data.dataset));
  }, []);

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  useEffect(() => {
    if (isMenuShown || isSignShown) {
      disableScroll();
    } else {
      window.onscroll = function () {};
    }
  }, [isMenuShown, isSignShown]);

  /*JSX*/
  return (
    <Context.Provider value={context}>
      <Router>
        <div className="main">
          <Header />
          {isMenuShown && <Menu />}
          {isSignShown && <Sign />}
          <Routes>
            {sportsData.map((res, index) => (
              <Route
                path={`/category/${res.category}`}
                key={index}
                element={
                  <Gallery
                    category={res.category}
                    faTitle={res.fa_category}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            {brandsData.map((res, index) => (
              <Route
                path={`/category/${res.brand}`}
                key={index}
                element={
                  <Gallery
                    category={res.brand}
                    faTitle={res.brand}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            {productTypeData.map((res, index) => (
              <Route
                path={`/category/${res.type}`}
                key={index}
                element={
                  <Gallery
                    category={res.type}
                    faTitle={res.fa_type}
                    checkTheCart={checkTheCart}
                    cart={cart}
                  />
                }
              />
            ))}

            <Route
              path="/request-form"
              element={<Notice title="request-form" />}
            />

            <Route path="/privacy" element={<Notice title="privacy" />} />

            <Route path="/guarantee" element={<Notice title="guarantee" />} />

            <Route path="/faq" element={<Notice title="faq" />} />

            <Route path="/blog-news" element={<Notice title="blog-news" />} />

            <Route path="/about" element={<Notice title="about" />} />

            <Route path="/contact" element={<Notice title="contact" />} />

            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
};
