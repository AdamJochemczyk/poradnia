import React from "react";
import { Navigation } from "src/Components/Navigation/Navigation";
import { PageTitle } from "src/Components/PageTitle/PageTitle";
import { Button } from "src/Components/Buttons/Button";
import styles from "./Offer.module.scss";
import bowlOffer from "src/assets/Photos/bowl.png";
import potOfVegetables from "src/assets/Photos/potOfVegetables.png";
import personOnScale from "src/assets/Photos/personOnScale.png";
import {
    MOBILE_AND_ONLINE_DIETS,
    OFFER_DATA,
    BODY_COMPOSITION_ANALYZER,
    PREPARATION_FOR_MEDICAL_EXAMINATION,
    PACKAGES,
} from "src/Utilities/mocks";

export const Offer = () => {
    return (
        <>
            <Navigation />
            <article className={styles.wrapper}>
                <PageTitle text={"zacznij już teraz"} />
                <section>
                    <div className={styles.container}>
                        <div>
                            {/* TODO: powiększyć miskę */}
                            <picture>
                                {/* <source
                                    srcSet="/media/cc0-images/surfer-240-200.jpg"
                                    media="min-width: 600px)"></source> */}
                                <img src={bowlOffer} alt="Bowl" />
                            </picture>
                        </div>
                        <div>
                            <p className={styles.description}>
                                Indywidualne i skuteczne jadłospisy oraz ciągłe wsparcie dietetyka i
                                pomoc w zmianie nawyków żywieniowych pomogą Ci osiągnąć swój cel,
                                zyskać zdrowie, dobre samopoczucie.
                            </p>
                            <p className={styles.description}>
                                <span>
                                    Nie zwlekaj i zacznij już dziś, aby szybciej cieszyć się zdrowym
                                    życiem!
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.mobileAndOnlineDiets}>
                        {MOBILE_AND_ONLINE_DIETS.map(({ src, alt, text }) => {
                            return (
                                <div
                                    key={text + src}
                                    className={styles.mobileAndOnlineDiets__innerContainer}>
                                    <img
                                        className={styles.mobileAndOnlineDiets__image}
                                        src={src}
                                        alt={alt}
                                    />
                                    <p className={styles.mobileAndOnlineDiets__paragraph}>{text}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <h2 className={styles.header}>OFERTA</h2>
                    <div className={styles.container}>
                        <div>
                            <p className={styles.description}>
                                <span>
                                    Poradnia Dietetyczna powstała z myślą o tworzeniu elastycznych,
                                    spersonalizowanych jadłospisów dopasowanych do potrzeb i
                                    preferencji wszystkich klientów.
                                </span>
                            </p>
                            <p className={styles.description}>
                                Konsultacje odbywają się w formie{" "}
                                <span>online lub telefonicznie.</span> Jako dietetyk mobilny oferuję
                                także konsultacje z dojazdem do domu lub w wyznaczone miejsce.
                            </p>
                        </div>
                        <div>
                            {/* TODO: powiększyć garnek */}
                            <picture>
                                <img src={potOfVegetables} alt="Pot of vegetables" />
                            </picture>
                        </div>
                    </div>
                    <div className={styles.boxOfferContainer}>
                        {OFFER_DATA.map(offer => {
                            if (offer.listText) {
                                return (
                                    <div key={offer.title} className={styles.boxOffer}>
                                        <p className={styles.boxOffer__title}>{offer.title}</p>
                                        <div>
                                            <ul className={styles.boxOffer__list}>
                                                {offer.listText.map(text => (
                                                    <li
                                                        key={text}
                                                        className={styles.boxOffer__list__item}>
                                                        {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            } else if (offer.extraText) {
                                return (
                                    <div key={offer.title} className={styles.boxOffer}>
                                        <p className={styles.boxOffer__title__small}>
                                            {offer.title}
                                        </p>
                                        <div className={styles.boxOffer__innerContainer}>
                                            <ul className={styles.boxOffer__list}>
                                                {offer.extraText.map(text => (
                                                    <li
                                                        key={text}
                                                        className={styles.boxOffer__list__itemDash}>
                                                        {text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className={styles.boxOffer__paragraph}>
                                                {offer.price}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <div key={offer.title} className={styles.boxOffer}>
                                    <div className={styles.boxOffer__innerContainer}>
                                        <p className={styles.boxOffer__paragraph}>{offer.title}</p>
                                        <p className={styles.boxOffer__paragraph}>{offer.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <div className={styles.textContainer__almostHalfScreen}>
                        <p className={styles.description}>
                            Indywidualne podejście do każdego Klienta zapewnia również wykonanie
                            analizy składu ciała. Dostarcza ona wielu cennych informacji dotyczących
                            kondycji całego ciała, pozwala na szczegółowe kontrolowanie postępów i
                            skuteczności dietoterapii.
                        </p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.description}>
                            <span>
                                Analizator TANITA MC-580 MS, który posiadam, jest mobilny, dlatego
                                możesz umówić się na pomiary bez wychodzenia z domu!
                            </span>
                        </p>
                    </div>
                    <div className={styles.container}>
                        <div>
                            <p className={styles.description__small}>
                                Analizator składu ciała wykorzystuje metodę bioimpedancji
                                elektrycznej (BIA) <br />– przepływu przez ciało prądu o niskim
                                (niewyczuwalnym) natężeniu. Metoda ta polega na bezinwazyjnym,
                                bezpiecznym pomiarze parametrów ciała m.in. takich jak:
                            </p>
                            <ul className={styles.boxOffer__list}>
                                {BODY_COMPOSITION_ANALYZER.map(text => (
                                    <li key={text} className={styles.boxOffer__list__item}>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {/* TODO: powiększyć koleżke na latającym spodku */}
                            <picture>
                                <img src={personOnScale} alt="Person on scale" />
                            </picture>
                        </div>
                    </div>
                    <div className={styles.textContainer__withBottomMargin}>
                        <h2 className={styles.header__green}>PRZEBIEG BADANIA</h2>
                        <p className={styles.description}>
                            Należy gołymi stopami wejść na urządzenie, dokładnie w miejsce 4
                            elektrod. Dłoniami dokładnie objąć uchwyt i trzymać wyprostowane ręce
                            przed sobą. W momencie rozpoczęcia badania urządzenie wysyła
                            niewyczuwalny impuls elektryczny, który przepływa przez ciało. Analiza
                            wykorzystuje opór tkanek na prąd, czyli fakt, że poszczególne tkanki
                            zawierają mniej, lub więcej wody i w różnym stopniu przewodzą prąd.
                            Pomiar trwa ok. 30 sekund.
                        </p>
                    </div>
                    <div className={styles.boxOffer}>
                        <p className={styles.boxOffer__title}>PRZYGOTOWANIE DO BADANIA</p>
                        <ul className={styles.boxOffer__list}>
                            {PREPARATION_FOR_MEDICAL_EXAMINATION.map(text => (
                                <li key={text} className={styles.boxOffer__list__spacedItem}>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.textContainer}>
                        <h2 className={styles.header__green}>PRZECIWWSKAZANIA</h2>
                        <p className={styles.description}>
                            <span>
                                Analizy składu ciała metodą bioimpedancji elektrycznej nie
                                przeprowadza się u osób z metalowymi częściami w ciele,
                                rozrusznikiem serca, urządzeniami elektrycznymi w jamie brzuszne
                                oraz u epileptyków. Z badania nie powinny korzystać również kobiety
                                podczas menstruacji oraz ciężarne.
                            </span>
                        </p>
                    </div>
                </section>
                <section>
                    <h2 className={styles.header}>PAKIETY</h2>
                    {PACKAGES.map(itemPackage => (
                        <div key={itemPackage.title} className={styles.boxOffer}>
                            <div className={styles.boxOffer__withButton}>
                                <div className={styles.textContainer__halfScreen}>
                                    <p className={styles.boxOffer__title}>{itemPackage.title}</p>
                                    {itemPackage.additionalTitle.map(additionalTitleItem => (
                                        <p
                                            key={additionalTitleItem}
                                            className={styles.boxOffer__title__normal}>
                                            {additionalTitleItem}
                                        </p>
                                    ))}
                                    {itemPackage.extraTitle && (
                                        <p className={styles.boxOffer__title__normal}>
                                            {/* Line-through price in packages. */}
                                            <span>
                                                {itemPackage.extraTitle.substring(
                                                    0,
                                                    itemPackage.extraTitle.indexOf("zł") + 2
                                                )}
                                            </span>{" "}
                                            {/* Normal price in packages. */}
                                            {itemPackage.extraTitle.substring(
                                                itemPackage.extraTitle.indexOf("zł") + 2
                                            )}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Button text="Wybieram" />
                                </div>
                            </div>
                            <div>
                                {itemPackage.paragraphs.map((paragraph, index) => {
                                    const [prefix, suffix] = paragraph.split(
                                        /(rozpoczynających przygodę z dietetykiem\.|chcących realizować swoje większe cele dietetyczne\.|które chcą osiągać więcej\.)/
                                    );
                                    return (
                                        <p key={index} className={styles.description__small}>
                                            {prefix}
                                            <span>{suffix}</span>
                                        </p>
                                    );
                                })}
                            </div>
                            <div>
                                <ul className={styles.boxOffer__list}>
                                    {itemPackage.list.map(listItem => (
                                        <li key={listItem} className={styles.boxOffer__list__item}>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    );
};
