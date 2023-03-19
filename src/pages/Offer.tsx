import { useState } from "react";
import { Navigation } from "src/Components/Navigation/Navigation";
import { PageTitle } from "src/Components/PageTitle/PageTitle";
import styles from "./Offer.module.scss";
import boxOfferStyles from "src/Components/OfferPage/BoxOffer/BoxOffer.module.scss";
import bowlOffer from "src/assets/Photos/bowl.png";
import bowlOfferMedium from "src/assets/Photos/bowl@2x.png";
import bowlOfferLarge from "src/assets/Photos/bowl@3x.png";
import potOfVegetables from "src/assets/Photos/potOfVegetables.png";
import potOfVegetablesLarge from "src/assets/Photos/potOfVegetablesLarge.png";
import fruits from "src/assets/Photos/fruits.png";
import personOnScale from "src/assets/Photos/personOnScale.png";
import {
  OFFER_DATA,
  BODY_COMPOSITION_ANALYZER,
  PREPARATION_FOR_MEDICAL_EXAMINATION,
} from "src/Utilities/mocks";
import {
  Article,
  BoxOffer,
  BoxesOffer,
  Container,
  Paragraph,
  MinorHeader,
  TextContainer,
  UnorderedList,
  UnorderedListItem,
  MobileAndOnlineDiets,
} from "src/Components/OfferPage";
import { Footer } from "src/Components/Footer/Footer";
import showDetails from "src/assets/Graphics/showDetails.svg";

export const Offer = () => {
  const [showDetailsBox, setShowDetailsBox] = useState(false);

  const toggleDetailsBox = () => {
    setShowDetailsBox((prev) => !prev);
  };

  return (
    <>
      <Navigation />
      <Article>
        <PageTitle text={"zacznij już teraz!"} />
        <section className={styles.startNowSection}>
          <Container>
            <div>
              <picture>
                <source media="(min-width: 1440px)" srcSet={bowlOfferLarge} />
                <source media="(min-width: 768px)" srcSet={bowlOfferMedium} />
                <img className={styles.bowlImage} src={bowlOffer} alt="Bowl" />
              </picture>
            </div>
            <div>
              <Paragraph
                text="Indywidualne i skuteczne jadłospisy oraz ciągłe wsparcie dietetyka i
                      pomoc w zmianie nawyków żywieniowych pomogą Ci osiągnąć swój cel, zyskać
                      zdrowie, dobre samopoczucie."
              />
              <Paragraph spanText="Nie zwlekaj i zacznij już dziś, aby szybciej cieszyć się zdrowym życiem!" />
            </div>
          </Container>
          <MobileAndOnlineDiets />
        </section>
        <section>
          <div>
            <MinorHeader styleName="center" header="OFERTA" />
            <div className={styles.offerWithBowlDesktop}>
              <Paragraph
                spanText="Poradnia Dietetyczna powstała z myślą o tworzeniu elastycznych,
                            spersonalizowanych jadłospisów dopasowanych do potrzeb i preferencji
                            wszystkich klientów."
              />
              <Paragraph
                text="Konsultacje odbywają się w formie "
                spanText="online lub telefonicznie. "
                extraText="Jako dietetyk mobilny oferuję także konsultacje z dojazdem do domu lub w wyznaczone miejsce."
              />
            </div>
            <div className={styles.offerWithBowl}>
              <Container styleName="almostHalfScreen">
                <Paragraph
                  spanText="Poradnia Dietetyczna powstała z myślą o tworzeniu elastycznych,
                            spersonalizowanych jadłospisów dopasowanych do potrzeb i preferencji
                            wszystkich klientów."
                />
                <Paragraph
                  text="Konsultacje odbywają się w formie "
                  spanText="online lub telefonicznie. "
                  extraText="Jako dietetyk mobilny oferuję także konsultacje z dojazdem do domu lub w wyznaczone miejsce."
                />
              </Container>
              <div className={styles.potOfVegetables}>
                <img src={potOfVegetables} alt="Pot of vegetables" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <MinorHeader styleName="center" header="PAKIETY" />
          <BoxesOffer />
        </section>
        <section>
          <MinorHeader styleName="center" header="CENNIK POJEDYNCZYCH USŁUG" />
          <div className={styles.offerSection}>
            <div className={styles.boxOfferContainer}>
              {OFFER_DATA.map((offer) => {
                if (offer.listText) {
                  return (
                    <BoxOffer
                      key={offer.title}
                      title={offer.title}
                      upperPrice={offer.price}
                      data={offer.listText}
                    />
                  );
                } else if (offer.extraText) {
                  return (
                    <BoxOffer
                      key={offer.title}
                      title={offer.title}
                      lowerPrice={offer.price}
                      data={offer.extraText}
                      titleParagraphStyle="small"
                      innerContainerStyle="innerContainer"
                      listItemStyle="dash"
                    />
                  );
                }
                return (
                  <BoxOffer
                    key={offer.title}
                    title={offer.title}
                    price={offer.price}
                  />
                );
              })}
              <div className={boxOfferStyles.boxOffer}>
                <div className={boxOfferStyles.boxOffer__innerContainer}>
                  <p className={boxOfferStyles.boxOffer__paragraph}>
                    Analiza składu ciała wraz z omówieniem wyników
                  </p>
                  <p className={boxOfferStyles.boxOffer__paragraph}>50 zł</p>
                </div>
                <div
                  className={styles.displayDetailsBoxButton}
                  onClick={toggleDetailsBox}
                >
                  <p>Dowiedz się więcej</p>
                  <img src={showDetails} alt="button" />
                </div>
              </div>
            </div>
            <div className={styles.potOfVegetablesLarge}>
              <img src={fruits} alt="fruits" />
              <img src={potOfVegetablesLarge} alt="Pot of vegetables" />
            </div>
          </div>
        </section>
        {showDetailsBox ? (
          <section className={styles.examinationSection}>
            <div className={styles.individualApproach}>
              <TextContainer styleName="noMargin">
                <Paragraph
                  styleName="small"
                  text="Indywidualne podejście do każdego Klienta zapewnia również wykonanie
                    analizy składu ciała. Dostarcza ona wielu cennych informacji dotyczących
                    kondycji całego ciała, pozwala na szczegółowe kontrolowanie postępów i
                    skuteczności dietoterapii."
                />
              </TextContainer>
            </div>
            <div className={styles.tanitaAnalyzer}>
              <TextContainer>
                <Paragraph
                  styleName="small"
                  spanText="Analizator TANITA MC-580 MS, który posiadam, jest mobilny, dlatego
                        możesz umówić się na pomiary bez wychodzenia z domu!"
                />
              </TextContainer>
            </div>
            <div className={styles.biaMethod}>
              <div>
                <Paragraph
                  text={
                    <>
                      Analizator składu ciała wykorzystuje metodę bioimpedancji
                      elektrycznej (BIA)
                      <br />– przepływu przez ciało prądu o niskim
                      (niewyczuwalnym) natężeniu. Metoda ta polega na
                      bezinwazyjnym, bezpiecznym pomiarze parametrów ciała m.in.
                      takich jak:
                    </>
                  }
                  styleName="small"
                />
                <UnorderedList>
                  {BODY_COMPOSITION_ANALYZER.map((text) => (
                    <UnorderedListItem key={text} text={text} />
                  ))}
                </UnorderedList>
              </div>
              <div
                className={`${styles.personImageContainer} ${styles.personImageContainerHideOnDesktop}`}
              >
                <img
                  className={styles.personImage}
                  src={personOnScale}
                  alt="Person on scale"
                />
              </div>
            </div>
            <div
              className={`${styles.personImageContainer} ${styles.personImageContainerShowOnDesktop}`}
            >
              <img
                className={styles.personImage}
                src={personOnScale}
                alt="Person on scale"
              />
            </div>
            <div className={styles.theCourseOfExamination}>
              <TextContainer styleName="withBottomMargin">
                <MinorHeader header="PRZEBIEG BADANIA" styleName="green" />
                <Paragraph
                  text="Należy gołymi stopami wejść na urządzenie, dokładnie w miejsce 4 elektrod.
                    Dłoniami dokładnie objąć uchwyt i trzymać wyprostowane ręce przed sobą. W
                    momencie rozpoczęcia badania urządzenie wysyła niewyczuwalny impuls
                    elektryczny, który przepływa przez ciało. Analiza wykorzystuje opór tkanek
                    na prąd, czyli fakt, że poszczególne tkanki zawierają mniej, lub więcej wody
                    i w różnym stopniu przewodzą prąd. Pomiar trwa ok. 30 sekund."
                />
              </TextContainer>
            </div>
            <div className={styles.preparationForMedicalExamination}>
              <MinorHeader
                header="PRZYGOTOWANIE DO BADANIA"
                styleName="green"
              />
              <UnorderedList>
                {PREPARATION_FOR_MEDICAL_EXAMINATION.map((text) => (
                  <UnorderedListItem
                    key={text}
                    text={text}
                    listItemStyle="spacedItem"
                  />
                ))}
              </UnorderedList>
            </div>
            <div className={styles.contraindications}>
              <TextContainer>
                <MinorHeader header="PRZECIWWSKAZANIA" styleName="green" />
                <Paragraph
                  text="Analizy składu ciała metodą bioimpedancji elektrycznej nie
                    przeprowadza się u osób z metalowymi częściami w ciele,
                    rozrusznikiem serca, urządzeniami elektrycznymi w jamie brzuszne
                    oraz u epileptyków. Z badania nie powinny korzystać również kobiety
                    podczas menstruacji oraz ciężarne."
                />
              </TextContainer>
            </div>
          </section>
        ) : null}
      </Article>
      <Footer />
    </>
  );
};
