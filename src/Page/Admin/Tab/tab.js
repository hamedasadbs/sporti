/*INNER-COMPONENTS*/
import { useState } from "react";
/*CSS*/
import style from "./tab.module.scss";

export const AdminTab = (props) => {
  const [add, setAdd] = useState(true);
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);

  function addHandler() {
    setAdd(true);
    setRemove(false);
    setEdit(false);
    props.activeTab("add");
  }

  function removeHandler() {
    setAdd(false);
    setRemove(true);
    setEdit(false);
    props.activeTab("remove");
  }

  function editHandler() {
    setAdd(false);
    setRemove(false);
    setEdit(true);
    props.activeTab("edit");
  }

  return (
    <div className={style.tab}>
      <span className={style.buttons}>
        <button
          {...(edit
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={editHandler}
        >
          ویرایش
        </button>
        <button
          {...(remove
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={removeHandler}
        >
          حذف
        </button>
        <button
          {...(add
            ? { className: style.activeTab }
            : { className: style.notActiveTab })}
          onClick={addHandler}
        >
          افزودن
        </button>
      </span>
    </div>
  );
};
