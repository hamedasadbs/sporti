/*INNER-COMPONENTS*/
import React, { useState } from "react";
/*CSS*/
import classes from "./Details.module.scss";
/*CHILD-COMPONENTS*/
import { Dropdown } from "../../Tool/Dropdown/Dropdown";

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
      <div className={classes.details}>
        <h1 className={classes.title}>{props.faTitle}</h1>
        <article>
          <div className={classes.extraInfos}>
            <div className={classes.tabs}>
              <button
                onClick={commentsHandler}
                {...(isCommentsDisplay === true && {
                  className: classes.activeTab,
                })}
              >
                نظرات
              </button>
              <button
                onClick={descriptionHandler}
                {...(isDescDisplay === true && {
                  className: classes.activeTab,
                })}
              >
                توضیحات
              </button>
              <button
                onClick={featuresHandler}
                {...(isFeaturesDisplay === true && {
                  className: classes.activeTab,
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
            {props.exi != 0 ? (
              <button className={classes.addToCart}>افزودن به سبد</button>
            ) : (
              <button className={classes.disabled} disabled>
                ناموجود
              </button>
            )}
          </div>
          <div className={classes.images}>
            <div className={classes.primary}>
              <img src={`/Images/Product/${props.image}`} alt={props.faTitle} />
            </div>
            <div className={classes.secondary}>
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
