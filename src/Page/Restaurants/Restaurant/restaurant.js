/*CSS*/
import style from "./restaurant.module.scss";

export const Restaurant = (props) => (
  <>
    {props.index % 4 === 0 ? (
      <section className={style.bigRestaurant}>
        <img src={`/Images/Restaurants/${props.img}`} alt="restaurant" />
        <h1>{props.title}</h1>
        <div className={style.stars}>
          {[...Array(parseInt(props.stars))].map((x) => (
            <i className={`fa fa-star ${style.starOn}`}></i>
          ))}
          {[...Array(5 - parseInt(props.stars))].map((x) => (
            <i className={`fa fa-star ${style.starOff}`}></i>
          ))}
          <div className={style.point}>{props.points}</div>
        </div>
        <h2>{props.address}</h2>
        <div className={style.info}>
          <div className={style.firstInfo}>{props.info2}</div>
          <div className={style.secondInfo}>{props.info1}</div>
        </div>
      </section>
    ) : (
      <section className={style.restaurant}>
        <img src={`/Images/Restaurants/${props.img}`} alt="restaurant" />
        <h1>{props.title}</h1>
        <div className={style.stars}>
          {[...Array(parseInt(props.stars))].map((x) => (
            <i className={`fa fa-star ${style.starOn}`}></i>
          ))}
          {[...Array(5 - parseInt(props.stars))].map((x) => (
            <i className={`fa fa-star ${style.starOff}`}></i>
          ))}
          <div className={style.point}>{props.points}</div>
        </div>
        <h2>{props.address}</h2>
        <div className={style.info}>
          <div className={style.firstInfo}>{props.info2}</div>
        </div>
      </section>
    )}
  </>
);
