import React, { useEffect, useState } from "react";

const Dropdown = (props) => {
  const [dd, setDd] = useState(null);

  useEffect(() => {
    if (props.type == "basket") setDd(<span>سبد شما خالی است</span>);
    else if (props.type == "account")
      setDd(
        <>
          <button className="login" onClick={props.signInClick}>
            ورود
          </button>
          <button className="register" onClick={props.signUpClick}>
            عضویت
          </button>
        </>
      );
    else if (props.type == "products") setDd("products");
    else if (props.type == "productType") setDd("product type");
  }, []);
  return <>{dd}</>;
};

export default Dropdown;
