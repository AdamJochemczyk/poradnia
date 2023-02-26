import React, { useState } from "react";
import { Navigation } from "src/Components/Navigation/Navigation";
import { PageTitle } from "src/Components/PageTitle/PageTitle";
import styles from "./Offer.module.scss";
import bowlOffer from "src/assets/Photos/bowl.png";
import bowlOfferMedium from "src/assets/Photos/bowl@2x.png";
import bowlOfferLarge from "src/assets/Photos/bowl@3x.png";
import fruits from "src/assets/Photos/fruits.png";
import potOfVegetables from "src/assets/Photos/potOfVegetables.png";
import potOfVegetablesLarge from "src/assets/Photos/potOfVegetablesLarge.png";
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

export const Offer = () => {
  const [isWide, setIsWide] = useState(window.innerWidth < 768);

  const handleResize = () => setIsWide(window.innerWidth < 768);

  window.addEventListener("resize", handleResize);

  return (
    <>
      <Navigation />
      <Article>
        <PageTitle text={"zacznij już teraz"} />
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
        <div className={styles.fruitsImage}>
          <img src={fruits} alt="Fruits" />
        </div>
        <section>
          <div>
            <MinorHeader header="OFERTA" />
            <Container>
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
            </Container>
          </div>
          <div className={styles.offerSection}>
            <div className={styles.boxOfferContainer}>
              {OFFER_DATA.map((offer) => {
                if (offer.listText) {
                  return (
                    <BoxOffer
                      key={offer.title}
                      title={offer.title}
                      data={offer.listText}
                    />
                  );
                } else if (offer.extraText) {
                  return (
                    <BoxOffer
                      key={offer.title}
                      title={offer.title}
                      price={offer.price}
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
            </div>
            <div className={styles.potOfVegetablesLarge}>
              <img src={potOfVegetablesLarge} alt="Pot of vegetables" />
            </div>
          </div>
        </section>
        <section className={styles.examinationSection}>
          <div className={styles.individualApproach}>
            <TextContainer styleName="almostHalfScreen">
              <Paragraph
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
                spanText="Analizator TANITA MC-580 MS, który posiadam, jest mobilny, dlatego
                        możesz umówić się na pomiary bez wychodzenia z domu!"
              />
            </TextContainer>
          </div>
          {isWide ? (
            <Container>
              <div className={styles.biaMethod}>
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
                <div>
                  <UnorderedList>
                    {BODY_COMPOSITION_ANALYZER.map((text) => (
                      <UnorderedListItem key={text} text={text} />
                    ))}
                  </UnorderedList>
                </div>
              </div>
              <div className={styles.personImageContainer}>
                <img
                  className={styles.personImage}
                  src={personOnScale}
                  alt="Person on scale"
                />
              </div>
            </Container>
          ) : (
            <>
              <div className={styles.biaMethod}>
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
                <div>
                  <UnorderedList>
                    {BODY_COMPOSITION_ANALYZER.map((text) => (
                      <UnorderedListItem key={text} text={text} />
                    ))}
                  </UnorderedList>
                </div>
              </div>
              <div className={styles.personImageContainer}>
                <img
                  className={styles.personImage}
                  src={personOnScale}
                  alt="Person on scale"
                />
              </div>
            </>
          )}
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
            <BoxOffer
              title="PRZYGOTOWANIE DO BADANIA"
              data={PREPARATION_FOR_MEDICAL_EXAMINATION}
              listItemStyle="spacedItem"
            />
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
        <section>
          <MinorHeader header="PAKIETY" />
          <BoxesOffer />
        </section>
      </Article>
    </>
  );
};
