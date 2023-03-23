import { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import logoDesktop from "../../assets/Photos/logoDesktop.svg";
import logoMobile from "../../assets/Photos/logoMobile.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigation=useNavigate()
  const { pathname } = useLocation();

  const [showLogo, setShowLogo] = useState(window.innerWidth < 900);

  const handleLogoChange = () => {
    if (window.innerWidth < 900) {
      setShowLogo(true);
    } else if (window.scrollY > 350) {
      setShowLogo(true);
    }else if (pathname === "/") {
      setShowLogo(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleLogoChange, { passive: true });

    if(pathname!=="/"){
      setShowLogo(true);
    }
    return () => {
      window.removeEventListener("scroll", handleLogoChange);
    };
  }, []);

  const scrollWithOffset = (el: any, offset: number) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick=()=>{
    if(pathname==="/"){
       window.scroll({
         top: 0,
         left: 0,
         behavior: "smooth",
       });
    }else{
      navigation("/");
    }
  }

  return (
    <>
      <ScrollToTop />
      <CookiePolicy />
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          {showLogo ? (
            <picture onClick={handleLogoClick}>
              <source srcSet={logoDesktop} media="(min-width: 900px)" />
              <img src={logoMobile} alt="logo mobile" />
            </picture>
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
