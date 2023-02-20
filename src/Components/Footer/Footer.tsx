import { Button } from "../Buttons/Button";
import style from "./Footer.module.scss";
import phone from "../../assets/Graphics/phone.svg";
import mail from "../../assets/Graphics/mail.svg";
import fb from "../../assets/Graphics/fb.svg";
import insta from "../../assets/Graphics/insta.svg";
import footerFork from "../../assets/Graphics/footerFork.svg";
import funduszeEuropejskie from "../../assets/Graphics/fundusze.png";
import Polska from "../../assets/Graphics/POLSKA.png";
import unia from "../../assets/Graphics/unia.png";
import sla from "../../assets/Graphics/sla.png";
import badajto from "../../assets/Graphics/badajto.png";

// TODO: links
export const Footer = () => {
    return (
        <footer className={style.container}>
            <section className={style.newsletter}>
                <p>Chcesz zobaczyć przykładowy jadłospis lub chcesz być na bieżąco?</p>
                <p className={style.newsletter_title}>Zapisz się do newslettera!</p>
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
            </section>
            <section className={style.contact}>
                <div className={style.contact_icon_cont}>
                    <img className={style.contact_icon} src={phone} alt="799 288 583" /> 799 288 583
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
                    <div>
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
                    <div>
                        <img src={footerFork} alt="widelec do lewej" />
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
