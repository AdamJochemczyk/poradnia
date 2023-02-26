import { Button } from "../Buttons/Button";
import style from "./Footer.module.scss";
import phone from "../../assets/Graphics/phone.svg";
import mail from "../../assets/Graphics/mail.svg";
import fb from "../../assets/Graphics/fb.svg";
import insta from "../../assets/Graphics/insta.svg";
import footerFork from "../../assets/Graphics/footerFork.svg";
import footerForkTop from "../../assets/Graphics/forkToTop.svg";
import funduszeEuropejskie from "../../assets/Graphics/fundusze.png";
import Polska from "../../assets/Graphics/POLSKA.png";
import unia from "../../assets/Graphics/unia.png";
import sla from "../../assets/Graphics/sla.png";
import badajto from "../../assets/Graphics/badajto.png";

// TODO: links
export const Footer = () => {
  return (
    <footer className={style.container} id="newsletter">
      <section className={style.newsletter}>
        <div>
          <p>
            Chcesz zobaczyć przykładowy jadłospis lub chcesz być na bieżąco?
          </p>
          <p className={style.newsletter_title}>Zapisz się do newslettera!</p>
        </div>
        <div>
          <form>
            <div className={style.newsletter_form_control}>
              <input className={style.newsletter_input} placeholder="Imię" />
            </div>
            <div className={style.newsletter_form_control}>
              <input
                className={style.newsletter_input}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className={style.newsletter_checkbox_cont}>
              <input className={style.newsletter_checkbox} type="checkbox" />
              Wyrażam zgodę na przetwarzanie danych osobowych
            </div>
            <div className={style.newsletter_send_cont}>
              <Button text="wyślij" />
            </div>
          </form>
        </div>
      </section>
      <section className={style.contactFormSection} id="contact">
        <div>
          <p className={style.contactFormHeader}>
            Chesz ze mną współpracować?
            <br />
            Skontaktuj się!
          </p>
          <form className={style.contactForm}>
            <div>
              <input
                className={style.contactForm_input}
                placeholder="Imię i nazwisko"
              />
            </div>
            <div>
              <input
                className={style.contactForm_input}
                placeholder="Numer telefonu"
              />
            </div>
            <div>
              <input
                type="email"
                className={style.contactForm_input}
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className={`${style.contactForm_input} ${style.contactForm_area}`}
                placeholder="Treść"
              />
            </div>
            <div className={style.newsletter_checkbox_cont}>
              <input className={style.newsletter_checkbox} type="checkbox" />
              Wyrażam zgodę na przetwarzanie danych osobowych
            </div>
            <div className={style.newsletter_send_cont}>
              <Button text="wyślij" />
            </div>
          </form>
        </div>
      </section>
      <section className={style.contact}>
        <div className={style.links}>
          <div className={style.contact_icon_cont}>
            <img className={style.contact_icon} src={phone} alt="799 288 583" />{" "}
            799 288 583
          </div>
          <div className={style.contact_icon_cont}>
            <img
              className={style.contact_icon}
              src={mail}
              alt="kontakt@poradniadietetyczna.online"
            />{" "}
            kontakt@poradniadietetyczna.online
          </div>
          <div className={style.socials}>
            <div className={style.socials_icons}>
              <div>
                {" "}
                <img
                  className={style.contact_fb}
                  src={fb}
                  alt="kontakt@poradniadietetyczna.online"
                />
              </div>
              <div>
                {" "}
                <img
                  className={style.contact_insta}
                  src={insta}
                  alt="kontakt@poradniadietetyczna.online"
                />
              </div>
            </div>
            <picture className={style.fork}>
              <source srcSet={footerForkTop} media="(min-width: 800px)" />
              <img src={footerFork} alt="widelec do lewej" />
            </picture>
          </div>
        </div>
        <div className={style.logos}>
          <img src={funduszeEuropejskie} alt="fundusze europejskie" />
          <img src={Polska} alt="Polska" />
          <img src={unia} alt="Unia" />
          <img src={sla} alt="Ślaskie Laboratoria Analityczne" />
          <img src={badajto} alt="Badaj to" />
        </div>
      </section>
    </footer>
  );
};
