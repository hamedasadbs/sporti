/*INNER-COMPONENTS*/
import React, { useState } from "react";
/*CSS*/
import style from "./Details.module.scss";
/*CHILD-COMPONENTS*/
import { Dropdown } from "../../Tool/Dropdown/Dropdown";
/*ASSETS*/
import Button from "@material-ui/core/Button";

export const Details = (props) => {
  /*STATES*/
  const [isDescDisplay, setIsDescDisplay] = useState(false);
  const [isFeaturesDisplay, setIsFeaturesDisplay] = useState(true);
  const [isCommentsDisplay, setIsCommentsDisplay] = useState(false);
  /*FUNCTIONS*/
  const descriptionHandler = () => {
    setIsFeaturesDisplay(false);
    setIsCommentsDisplay(false);
    setIsDescDisplay(true);
  };
  const featuresHandler = () => {
    setIsDescDisplay(false);
    setIsCommentsDisplay(false);
    setIsFeaturesDisplay(true);
  };
  const commentsHandler = () => {
    setIsDescDisplay(false);
    setIsFeaturesDisplay(false);
    setIsCommentsDisplay(true);
  };
  return (
    <>
      <div className={style.details}>
        <h1 className={style.title}>{props.faTitle}</h1>
        <article>
          <div className={style.extraInfos}>
            <div className={style.tabs}>
              <button
                onClick={commentsHandler}
                {...(isCommentsDisplay === true && {
                  className: style.activeTab,
                })}
              >
                نظرات
              </button>
              <button
                onClick={descriptionHandler}
                {...(isDescDisplay === true && {
                  className: style.activeTab,
                })}
              >
                توضیحات
              </button>
              <button
                onClick={featuresHandler}
                {...(isFeaturesDisplay === true && {
                  className: style.activeTab,
                })}
              >
                مشخصات
              </button>
            </div>
            <Dropdown
              dis={isDescDisplay}
              type="description"
              desc={props.desc}
            />
            <Dropdown
              dis={isFeaturesDisplay}
              price={props.price}
              type="features"
              ty={props.type}
              kind={props.kind}
              size={props.size}
            />
            <Dropdown
              dis={isCommentsDisplay}
              type="comments"
              desc={props.desc}
            />
            {props.exi === "1" ? (
              <Button variant="contained" color="secondary">
                افزودن به سبد
              </Button>
            ) : (
              <Button variant="outlined" disabled>
                ناموجود
              </Button>
            )}
          </div>
          <div className={style.images}>
            <div className={style.primary}>
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            </div>
            <div className={style.secondary}>
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
