import React from "react";
import { MOBILE_AND_ONLINE_DIETS } from "src/Utilities/mocks";
import styles from "./MobileAndOnlineDiets.module.scss";

export const MobileAndOnlineDiets = () => {
  return (
    <div className={styles.mobileAndOnlineDiets}>
      {MOBILE_AND_ONLINE_DIETS.map(({ src, srcLarge, alt, text }) => {
        return (
          <div
            key={text + src}
            className={styles.mobileAndOnlineDiets__innerContainer}
          >
            <picture className={styles.mobileAndOnlineDiets__pictureContainer}>
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
  );
};
