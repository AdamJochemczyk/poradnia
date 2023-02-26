import styles from "./HealthCare.module.scss"
import logo from "../../assets/Photos/logokolor2.png"
import { MOBILE_AND_ONLINE_DIETS } from "src/Utilities/mocks";

function HealthCare() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
      <p className={styles.description}>
        ZADBAJ O SWOJE ZDROWIE BEZ WYCHODZENIA Z DOMU
      </p>
      <div className={styles.mobileAndOnlineDiets}>
        {MOBILE_AND_ONLINE_DIETS.map(({ src, srcLarge, alt, text }) => {
          return (
            <div
              key={text + src}
              className={styles.mobileAndOnlineDiets__innerContainer}
            >
              <picture
                className={styles.mobileAndOnlineDiets__pictureContainer}
              >
                <source media="(min-width: 768px)" srcSet={srcLarge} />
                <img src={src} alt={alt} />
              </picture>
              <p className={styles.mobileAndOnlineDiets__paragraph}>
                {text.split(" ")[0]}
                <br />
                {text.split(" ")[1]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HealthCare