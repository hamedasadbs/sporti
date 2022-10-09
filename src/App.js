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
import { Detail } from "../src/pages/detail/Detail";
import { Notice } from "../src/layout/notice/Notice";
import { Footer } from "./layout/footer/Footer";
/*LIBRARY*/
import * as cookieLib from "./logic/Cookie";
import * as cartLib from "./logic/Cart";

export const App = () => {
  /*STATE*/
  const [username, setUsername] = useState(cookieLib.getCookie("username"));
  const [login, setLogin] = useState(cookieLib.getCookie("login"));
  const [page, setPage] = useState("home");
  const [sports, setSports] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productType, setProductType] = useState([]);
  const [productKind, setProductKind] = useState([]);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  /*VARIABLE*/
  const typeURL = "http://localhost:8080/type";
  const productsURL = "http://localhost:8080/products";
  const context = {
    usernameCon: [username, setUsername],
    loginCon: [login, setLogin],
    pageCon: [page, setPage],
    menuCon: [isMenuShown, setIsMenuShown],
    signCon: [isSignShown, setIsSignShown],
    productsCon: [products, setProducts],
    cartCon: [cart, setCart],
    typeCon: {
      sports: [sports, setSports],
      brands: [brands, setBrands],
      productType: [productType, setProductType],
      productKind: [productKind, setProductKind],
    },
  };
  /*FUNCTION*/
  useEffect(() => {
    axios.post(productsURL).then((res) => setProducts(res.data.pro));
  }, []);

  useEffect(() => {
    if (cookieLib.getCookie("login")) {
      console.log(cartLib.checkTheCart(username));
      setCart(cartLib.checkTheCart(username));
    }
  }, []);

  useEffect(() => {
    axios
      .post(typeURL, {
        list: "category,fa_category",
      })
      .then((res) => setSports(res.data.dataset));
    axios
      .post(typeURL, {
        list: "brand",
      })
      .then((res) => setBrands(res.data.dataset));
    axios
      .post(typeURL, {
        list: "type,fa_type",
      })
      .then((res) => setProductType(res.data.dataset));
    axios
      .post(typeURL, {
        list: "kind",
      })
      .then((res) => setProductKind(res.data.dataset));
  }, []);

  const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  useEffect(() => {
    if (isSignShown) {
      disableScroll();
    } else {
      window.onscroll = function () {};
    }
  }, [isMenuShown, isSignShown]);

  if (typeof window !== "undefined") {
    window.onresize = function () {
      if (window.innerWidth > 1005 && isMenuShown) setIsMenuShown(false);
    };
  }
  /*JSX*/
  return (
    <Context.Provider value={context}>
      <Router>
        <div className="main">
          <Header />
          {isMenuShown && <Menu />}
          {isSignShown && <Sign />}
          <Routes>
            {sports.map((res, index) => (
              <Route
                path={`/category/${res.category}`}
                key={index}
                element={
                  <Gallery category={res.category} faTitle={res.fa_category} />
                }
              />
            ))}

            {brands.map((res, index) => (
              <Route
                path={`/category/${res.brand}`}
                key={index}
                element={<Gallery category={res.brand} faTitle={res.brand} />}
              />
            ))}

            {productType.map((res, index) => (
              <Route
                path={`/category/${res.type}`}
                key={index}
                element={<Gallery category={res.type} faTitle={res.fa_type} />}
              />
            ))}

            {products.map((res, index) => (
              <Route
                path={`/product/${res.id}`}
                key={index}
                element={<Detail product={res} />}
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
