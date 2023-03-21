import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { addSubscriberToList } from "src/api/addSubscriberToList";
import { sendEmail } from "src/api/sendEmailToCompany";

export const Footer = () => {

  const handleSubmitNewsletter = async (e: any) => {
    e.preventDefault();
    const [name, email, checkbox] = e.target;
    if (!checkbox.checked) {
      toast.error("Wyraź zgodę na zapis do newslettera");
      return;
    } else if (
      name.value !== "" &&
      email.value.includes("@") &&
      email.value.includes(".")
    ) {
      try {
        await addSubscriberToList(name.value, email.value);
        toast.success("Dziękujemy za zapis do newslettera");
        name.value = "";
        email.value = "";
        checkbox.checked = false;
      } catch (err) {
        toast.error("Coś poszło nie tak");
      }
    } else {
      toast.error("Uzupełnij poprawnie pola i spróbuj jeszcze raz");
    }
  };

  const handleSubmitContact = async (e: any) => {
    e.preventDefault();
    const [nameAndSurname, phone, email, message, checkbox] = e.target;
    if (!checkbox.checked) {
      toast.error("Wyraź zgodę na przetwarzanie danych osobowych");
      return;
    } else if (
      nameAndSurname.value !== "" &&
      phone.value !== "" &&
      email.value.includes("@") &&
      email.value.includes(".") &&
      message.value !== ""
    ) {
      try {
        await sendEmail(
          nameAndSurname.value,
          phone.value,
          email.value,
          message.value
        );
        toast.success(
          "Dziękujemy za wiadomość odpowiemy najszybciej jak to możliwe"
        );
        nameAndSurname.value = "";
        phone.value = "";
        email.value = "";
        message.value = "";
      } catch (err) {
        toast.error("Coś poszło nie tak");
      }
    } else {
      toast.error("Uzupełnij poprawnie pola i spróbuj jeszcze raz");
    }
  };

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
          <form onSubmit={handleSubmitNewsletter}>
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
              <Button text="wyślij" type="submit" />
            </div>
          </form>
        </div>
      </section>
      <section className={style.contactFormSection} id="contact">
        <div>
          <p className={style.contactFormHeader}>
            Chcesz ze mną współpracować?
            <br />
            Skontaktuj się!
          </p>
          <form className={style.contactForm} onSubmit={handleSubmitContact}>
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
                id="contactFormText"
                className={`${style.contactForm_input} ${style.contactForm_area}`}
                placeholder="Treść"
              />
            </div>
            <div className={style.newsletter_checkbox_cont}>
              <input className={style.newsletter_checkbox} type="checkbox" />
              Wyrażam zgodę na przetwarzanie danych osobowych
            </div>
            <div className={style.newsletter_send_cont}>
              <Button type="submit" disabled={false} text="wyślij" />
            </div>
          </form>
        </div>
      </section>
      <section className={style.contact}>
        <div className={style.links}>
          <a href="tel:799288583" className={style.contact_icon_cont}>
            <img className={style.contact_icon} src={phone} alt="799 288 583" />{" "}
            799 288 583
          </a>
          <a
            href="mailto:kontakt@poradniadietetyczna.online"
            className={style.contact_icon_cont}
          >
            <img
              className={style.contact_icon}
              src={mail}
              alt="kontakt@poradniadietetyczna.online"
            />{" "}
            kontakt@poradniadietetyczna.online
          </a>
          <div className={style.socials}>
            <div className={style.socials_icons}>
              <a
                href="https://www.facebook.com/profile.php?id=100088199794512"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.contact_fb}
                  src={fb}
                  alt="https://www.facebook.com/profile.php?id=100088199794512"
                />
              </a>
              <a
                href="https://www.instagram.com/poradniadietetyczna.online"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.contact_insta}
                  src={insta}
                  alt="https://www.instagram.com/poradniadietetyczna.online"
                />
              </a>
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
