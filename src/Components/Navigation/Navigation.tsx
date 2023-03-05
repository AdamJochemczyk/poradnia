import { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import photo from "../../assets/Photos/logoZielone.png";
import { Link, useLocation } from "react-router-dom";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
import { CookiePolicy } from "../CookiePolicy/CookiePolicy";
import ScrollToTop from "src/Utilities/ScrollToTop";

export const MenuToggled = ({ closeAction }: { closeAction: () => void }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__close} />
      <div className={styles.menu__links}>
        <Link to="/oferta" className={styles.menu__option}>
          OFERTA
        </Link>
        <Link to="/dla-ciebie" className={styles.menu__option}>
          DLA CIEBIE
        </Link>
        <HashLink smooth to="/#newsletter" className={styles.menu__option}>
          ZAPISZ SIĘ
        </HashLink>
        <a href="tel:+48799288583" className={styles.menu__option}>
          <div>KONTAKT</div>
          <div>799 288 583</div>
        </a>
      </div>
      <button onClick={() => closeAction()} className={styles.menu__close}>
        <div className={styles.close__barP} />
        <div className={styles.close__barL} />
      </button>
    </div>
  );
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const [showLogo, setShowLogo] = useState(false);

  const handleLogoChange = () => {
    if (window.innerWidth < 900) {
      setShowLogo(true);
    } else if (window.scrollY > 350) {
      setShowLogo(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleLogoChange, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleLogoChange);
    };
  }, []);

  const {pathname} = useLocation();

  const scrollWithOffset = (el:any, offset:number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });}

  return (
    <>
      <ScrollToTop />
      <CookiePolicy />
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          {showLogo ? (
            <Link to="/">
              <img src={photo} alt="Logo" />
            </Link>
          ) : null}
        </div>
        <div className={styles.navbar__handle} onClick={handleClick}>
          <div className={styles.handle__element}></div>
          <div className={styles.handle__element}></div>
          <div className={styles.handle__element}></div>
        </div>
        <div className={styles.links__wide}>
          <Link
            to="/oferta"
            className={`${
              pathname.includes("/oferta") ? styles.menu__option_active : ""
            } ${styles.menu__option}`}
          >
            OFERTA
          </Link>
          <Link
            to="/dla-ciebie"
            className={`${
              pathname.includes("/dla-ciebie") ? styles.menu__option_active : ""
            } ${styles.menu__option}`}
          >
            DLA CIEBIE
          </Link>
          <HashLink
            smooth
            to={`${pathname}#newsletter`}
            scroll={(el: any) => scrollWithOffset(el, 150)}
            className={styles.menu__option}
          >
            ZAPISZ SIĘ
          </HashLink>
          <a href="tel:+48799288583" className={styles.menu__option}>
            <div>KONTAKT</div>
            <div>799 288 583</div>
          </a>
        </div>
      </nav>
      {isOpen && <MenuToggled closeAction={() => setIsOpen(false)} />}
    </>
  );
};
