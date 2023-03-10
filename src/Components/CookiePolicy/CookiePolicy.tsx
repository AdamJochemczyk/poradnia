import style from "./CookiePolicy.module.scss";
import { Button } from "../Buttons/Button";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "src/Utilities/cookies";
import privacy from "src/assets/privacyPolicy.pdf";

export const CookiePolicy = () => {
  const [isCookieSet, setIsCookieSet] = useState(false);
  useEffect(() => {
    const cookie = getCookie("allow");
    setIsCookieSet(Boolean(cookie));
  }, []);

  const cookiesAction = (isAccept: boolean) => {
    if (isAccept) {
      setCookie("allow", "yes", 30);
    }
    setIsCookieSet(true);
  };

  return !isCookieSet ? (
    <div className={style.cookie}>
      <h2>Dbamy o Twoją prywatność</h2>
      <p>
        Ta strona wykorzystuje pliki cookie w celu zapewnienia prawidłowego
        działania poszczególnych jej funkcji (pliki cookies własne) oraz pliki
        cookies pochodzące od podmiotów trzecich w celu korzystania z narzędzi
        zewnętrznych (Google Analytics, MailerLite). Do tych informacji, które
        są gromadzone w plikach cookies od podmiotów podmiotów trzecich, mają
        dostęp dostawcy wymienionych narzędzi zewnętrznych. Dowiedz się więcej:{" "}
        <a href={privacy} target="_blank">Polityka dotycząca cookie.</a>
      </p>
      <p className={style.question}>
        Czy wyrażasz zgodę na przechowywanie informacji oraz ustawienie dostępu
        do informacji w plikach cookies?
      </p>
      <div className={style.buttons}>
        <div className={style.mobile}>
          <Button
            text="NIE ZGADZAM SIĘ"
            transparent
            small
            handleClick={() => cookiesAction(false)}
          />
          <Button
            text="ZGADZAM SIĘ"
            small
            handleClick={() => cookiesAction(true)}
          />
        </div>
        <Button text="USTAWIENIA SZCZEGÓŁOWE" transparent small />
      </div>
    </div>
  ) : (
    <></>
  );
};
