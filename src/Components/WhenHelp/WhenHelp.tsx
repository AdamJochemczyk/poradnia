import { PointWithText } from "../PointWithText/PointWithText";
import style from "./WhenHelp.module.scss";

export const WhenHelp = () => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Kiedy mogę Ci pomóc?</h3>
      <div>
        <PointWithText
          pointNumber={1}
          primaryText={"Jeśli chcesz pozbyć się zbędnych kilogramów"}
          secondaryText={
            "Pomogę Ci sprawić, że jedzenie staje się Twoim sprzymierzeńcem"
          }
        />
        <PointWithText
          pointNumber={2}
          primaryText={"Jeśli chcesz zdrowo uzyskać kilka kilogramów"}
          secondaryText={
            "Pomogę Ci tak dobrać produkty, by przyrost masy ciała był stopniowy i zdrowy."
          }
        />
        <PointWithText
          pointNumber={3}
          primaryText={"Jeśli jesteś osobą chorą"}
          secondaryText={
            "Pomogę poprawić jakość Twojego życia, wyniki badań, a także odstawić leki, gdy jest to możliwe"
          }
        />
      </div>
      <div>
        <h4 className={style.subtitle}>Jeśli cierpisz na</h4>
        <div className={style.box}>
          <p className={style.box_primary}>
            Zaburzenia gospodarki węglowodanowej
          </p>
          <p>np. cukrzycę typu 1 i 2, insulinoodporność</p>
        </div>
        <div className={style.box}>
          <p className={style.box_primary}>Zaburzenia gospodarki lipidowej</p>
          <p>
            np. zbyt wysokie stężenie nieprawidłowego cholesterolu lub
            trójglicerydów
          </p>
        </div>
        <div className={style.box}>
          <p className={style.box_primary}>Choroby tarczycy</p>
          <p>np. niedoczynność lub nadczynność tarczycy, chorobę Hashimoto</p>
        </div>
      </div>
      <div>
        <PointWithText
          pointNumber={4}
          primaryText={
            "Jeśli chcesz zmienić swoje nawyki żywieniowe lub jeśli chcesz pomóc je zmienić swoim bliskim"
          }
          secondaryText={
            "Jeśli to Ty potrzebujesz zmiany, nauczę Cię zasad zdrowego odżywiania, doboru odpowiednich produktów, czytania etykiet i zmotywuję do kroku w stronę lepszego odżywiania. Jeśli chcesz pomóc swojemu dziecku, podpowiem Ci jak ukształtować nawyki żywieniowe oraz jak zachęcić dziecko do ich zmiany i kosztowania nowych produktów."
          }
        />
      </div>
      <div>
        <p className={style.step}>
          Zrób pierwszy krok w stronę zdrowia i umów się na konsultację
          dietetyczną
        </p>
        <div className={style.center}>
          <a href="">
            <button className={style.btn}>Oferta</button>
          </a>
        </div>
      </div>
    </div>
  );
};
