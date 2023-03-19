import style from "./Fundamentals.module.scss";
import fork from "../../assets/Graphics/fork.svg";
import cart from "../../assets/Graphics/cart.svg";
import heart from "../../assets/Graphics/heart.svg";
import stetoscope from "../../assets/Graphics/stetoscope.svg";
import apple from "../../assets/Graphics/time.svg";

function Fundamentals() {
  return (
    <div className={style.fundamentals}>
      <h2 className={style.fundamentals__header}>
        FUNDAMENTY SKUTECZNEJ DIETY
      </h2>
      <div className={style.content__desktop}>
        <div className={style.content}>
          <div className={style.content__element}>
            <img src={cart} alt="cart" className={style.image} />
            <p className={style.text}>
              <span className={style.bold}>
                Ogólnodostępne i niedrogie produkty,
              </span>{" "}
              które znajdziesz w lokalnych sklepach.
            </p>
          </div>
          <div className={style.content__element}>
            <img src={fork} alt="fork" className={style.image} />
            <p className={style.text}>
              Ty mówisz <span className={style.bold}>co lubisz,</span>
              <br /> a ja mówię Ci{" "}
              <span className={style.bold}>jak i kiedy to jeść.</span>
            </p>
          </div>
          <div className={style.content__element}>
            <img src={apple} alt="apple" className={style.image} />
            <p className={style.text}>
              <span className={style.bold}>Czas </span>
              przygotowania posiłków dostosowany do Ciebie.
            </p>
          </div>
          <div className={style.content__element}>
            <img src={stetoscope} alt="stetoscope" className={style.image} />
            <p className={style.text}>
              <span className={style.bold}>
                Indywidualnie dopasowana dieta,
              </span>{" "}
              na podstawie Twoich wyników badań i szczegółowego wywiadu.
            </p>
          </div>
          <div className={style.content__element}>
            <img src={heart} alt="heart" className={style.image} />
            <p className={style.text}>
              <span className={style.bold}> Wsparcie dietetyka,</span> nie tylko
              na wizytach kontrolnych. Jeśli tego potrzebujesz, możemy być w
              stałym kontakcie!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
