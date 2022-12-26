/*INNER COMPONENT*/
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Context } from "./logic/Context";
/*STYLE*/
import "./App.scss";
/*CHILD COMPONENT*/
import { Header } from "./layout/header/Header";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { Menu } from "./layout/menu/Menu";
import { Sign } from "../src/components/sign/Sign";
import { Gallery } from "./pages/gallery/Gallery";
import { Detail } from "./pages/detail/Detail";
import { Notice } from "./layout/notice/Notice";
import { Footer } from "./layout/footer/Footer";
import { AlertCom } from "./components/alert/Alert";
/*LIBRARY*/
import * as cookieLib from "./logic/Cookie";

export const App = () => {
  const checkTheCart = () => {
    axios
      .get(`http://localhost:8080/cart?username=${userInfo.username}`)
      .then((res) => setCart(res.data.dataset));
  };

  const checkTheLiked = () => {
    axios
      .get(`http://localhost:8080/like?username=${userInfo.username}`)
      .then((ct) => {
        setLiked(ct.data.dataset);
      });
  };
  /*STATE*/
  const [userInfo, setUserInfo] = useState(null);
  const [login, setLogin] = useState(cookieLib.getCookie("login"));
  const [page, setPage] = useState("home");
  const [sports, setSports] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productType, setProductType] = useState([]);
  const [productKind, setProductKind] = useState([]);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isSignShown, setIsSignShown] = useState(false);
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState({
    bool: false,
    text: "",
    type: "",
  });
  /*VARIABLE*/
  const typeURL = "http://localhost:8080/type";
  const context = {
    userInfoCon: [userInfo, setUserInfo],
    loginCon: [login, setLogin],
    pageCon: [page, setPage],
    menuCon: [isMenuShown, setIsMenuShown],
    signCon: [isSignShown, setIsSignShown],
    productsCon: [products, setProducts],
    cartCon: [cart, setCart],
    likedCon: [liked, setLiked],
    alertCon: [alert, setAlert],
    checkTheCartCon: [checkTheCart],
    checkTheLikedCon: [checkTheLiked],
    typeCon: {
      sports: [sports, setSports],
      brands: [brands, setBrands],
      productType: [productType, setProductType],
      productKind: [productKind, setProductKind],
    },
  };
  /*FUNCTION*/
  useEffect(() => {
    axios
      .post("http://localhost:8080/products")
      .then((res) => setProducts(res.data.pro));

    if (cookieLib.getCookie("login")) {
      axios
        .post("http://localhost:8080/login", {
          username: cookieLib.getCookie("user"),
          password: cookieLib.getCookie("pass"),
        })
        .then((res) => setUserInfo(res.data.user));
    }
  }, [cookieLib.getCookie("login")]);

  useEffect(() => {
    if (cookieLib.getCookie("login") && userInfo) {
      checkTheCart();
      checkTheLiked();
    }
  }, [userInfo]);

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
          {alert.bool && <AlertCom type={alert.type}>{alert.text}</AlertCom>}
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

            <Route path="/cart" element={<Cart />} />

            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
};
