import React from "react";
import { Navigation } from "src/Components/Navigation/Navigation";
import { PageTitle } from "src/Components/PageTitle/PageTitle";
import styles from "./Offer.module.scss";
import bowlOffer from "src/assets/Photos/bowl.png";
import carrot from "src/assets/Photos/carrot.png";
import grapefruit from "src/assets/Photos/grapefruit.png";
import potOfVegetables from "src/assets/Photos/potOfVegetables.png";
import personOnScale from "src/assets/Photos/personOnScale.png";

import { Button } from "src/Components/Buttons/Button";

const mobileAndOnlineDiets = [
    {
        src: carrot,
        alt: "carrot",
        text: "DIETETYK MOBILNY",
    },
    {
        src: grapefruit,
        alt: "grapefruit",
        text: "DIETETYK ONLINE",
    },
];

const offerData = [
    {
        title: "PIERWSZA KONSULTACJA DIETETYCZNA 120 ZŁ",
        listText: [
            "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
            "Omówienie wyników badań",
            "Wstępna diagnoza i omówienie problemu",
            "Wyznaczenie celu i kierunku dalszej współpracy",
            "Wsparcie i motywację",
        ],
    },
    {
        title: "DRUGA KONSULTACJA DIETETYCZNA 150 ZŁ",
        listText: [
            "Omówienie przygotowanego planu żywieniowego wraz z listTextą zakupów",
            "Edukacja żywieniowa",
        ],
    },
    {
        title: "KONSULTACJA KONTROLNA 80 ZŁ",
        listText: [
            "Analiza postępów dietoterapii",
            "Przy wystąpieniu trudności, omówienie ich i zaproponowanie rozwiązania",
            "Kontynuacja edukacji żywieniowej",
        ],
    },
    {
        title: "Konsultacja kontrolna z nowym planem żywieniowym",
        price: "150 ZŁ",
    },
    {
        title: "Dodatkowy indywidualny jadłospis 7-dniowy",
        price: "150 ZŁ",
    },
    {
        title: "Dodatkowy indywidualny jadłospis 14-dniowy",
        price: "250 ZŁ",
    },
    {
        title: "Jadłospis niestandardowy",
        extraText: ["w przypadku wielu wykluczeń i alergii"],
        price: "199 ZŁ",
    },
    {
        title: "Edukacja żywieniowa",
        extraText: ["pomoc w zmianie nawyków żywieniowych"],
        price: "100 ZŁ",
    },
    {
        title: "Dojazd do domu/w wyznaczone miejsce",
        price: "DO 15 KM. GRATIS",
    },
    {
        title: "Analiza składu ciała wraz z omówieniem wyników",
        price: "50 ZŁ",
    },
];

const bodyCompositionAnalyzer = [
    "masa ciała",
    "masa tkanki tłuszczowej",
    "poziom tłuszczu trzewnego",
    "masa mięśni szkieletowych",
    "całkowita zawartość wody w organizmie",
    "podstawowa przemiana materii",
    "BMI",
];

const preparationForMedicalExamination = [
    "Zachowaj 3 godzinną przerwę między ostatnim posiłkiem a badaniem",
    "Dobę przed badaniem nie pij alkoholu",
    "12 godzin przed badaniem nie wykonuj intensywnych ćwiczeń",
    "Ok. 30 minut przed badaniem skorzystaj z toalety",
    "Przed badaniem zdejmij wszystkie metalowe przedmioty",
    "Dłonie i stopy nie powinny być natłuszczone kremem lub balsamem",
];

const packages = [
    {
        title: "NA DOBRY POCZĄTEK",
        additionalTitle: ["1 miesiąc wsparcia", "299 zł / miesiąc"],
        paragraphs: [
            "Pakiet idealny dla osób rozpoczynających przygodę z dietetykiem.",
            "Obejmuje pierwszą i konsultacja z omówieniem planu żywieniowego oraz konsultację kontrolną.",
        ],
        list: [
            "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
            "Omówienie wyników badań",
            "Wstępną diagnozę i omówienie problemu",
            "Wyznaczenie celu i kierunku dalszej współpracy",
            "Indywidualny, elastyczny jadłospis 7 dniowy",
            "Listę zakupów",
            "Regularny kontakt i wsparcie dietetyka",
        ],
    },
    {
        title: "ZMIANA NA DOBRE",
        additionalTitle: ["3 miesiące wsparcia", "216 zł / miesiąc"],
        extraTitle: "897 zł 648 zł łącznie",
        paragraphs: [
            "Pakiet idealny dla osób chcących realizować swoje większe cele dietetyczne.",
            "Obejmuje pierwszą konsultację, 3 konsultacje z omówieniem nowego planu żywieniowego oraz 3 konsultacje kontrolne.",
        ],
        list: [
            "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
            "Omówienie wyników badań",
            "Wstępną diagnozę i omówienie problemu",
            "Wyznaczenie celu i kierunku dalszej współpracy",
            "Indywidualny, elastyczny jadłospis 7 dniowy, na każdy nowy miesiąc",
            "Listę zakupów",
            "Utrwalenie nowych nawyków żywieniowych w formie zadań kontrolnych",
            "Regularny kontakt i wsparcie dietetyka",
        ],
    },
    {
        title: "TOTALNA METAMORFOZA",
        additionalTitle: ["6 miesiące wsparcia", "199 zł / miesiąc"],
        extraTitle: "1794 zł 1194 zł łącznie",
        paragraphs: [
            "Pakiet idealny dla osób, które chcą osiągać więcej.",
            "Obejmuje pierwszą konsultację, 6 konsultacji z omówieniem nowego planu żywieniowego oraz 6 konsultacji kontrolnych.",
        ],
        list: [
            "Omówienie wywiadu żywieniowego oraz wywiadu dotyczącego stylu życia",
            "Omówienie wyników badań",
            "Wstępną diagnozę i omówienie problemu",
            "Wyznaczenie celu i kierunku dalszej współpracy",
            "Indywidualny, elastyczny jadłospis 7 dniowy, na każdy nowy miesiąc",
            "Listę zakupów",
            "Utrwalenie nowych nawyków żywieniowych w formie zadań kontrolnych",
            "Regularny kontakt i wsparcie dietetyka",
        ],
    },
];

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
                        {mobileAndOnlineDiets.map(({ src, alt, text }) => {
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
                        {offerData.map(offer => {
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
                                {bodyCompositionAnalyzer.map(text => (
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
                            {preparationForMedicalExamination.map(text => (
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
                    {packages.map(itemPackage => (
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
