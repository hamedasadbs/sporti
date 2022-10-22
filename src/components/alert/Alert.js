/*INNER COMPONENT*/
import { useContext } from "react";
import { Context } from "../../logic/Context";
/*MUI*/
import Alert from "@mui/material/Alert";

export const AlertCom = (props) => {
  /*VARIABLE*/
  const setAlert = useContext(Context).alertCon[1];
  /*FUNCTION*/
  setTimeout(() => {
    setAlert({
      bool: false,
      text: "",
      type: "",
    });
  }, 4000);
  /*JSX*/
  return (
    <Alert dir="rtl" className="alert" severity={props.type}>
      {props.children}
    </Alert>
  );
};
