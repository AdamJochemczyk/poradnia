import { Navigation } from "../Components/Navigation/Navigation";
import { PageTitle } from "../Components/PageTitle/PageTitle";
import forYouMobile from "src/assets/Graphics/for-you-hero-mobile.png";
import forYouDesktop from "src/assets/Graphics/for-you-hero-desktop.png";
import pomaranczaBig from "src/assets/Graphics/pomaranczaBig.png"
import { PointWithText } from "src/Components/PointWithText/PointWithText";
import { PreparationBoxes } from "src/Components/Organisms/PreparationBoxes/PreparationBoxes";
import styles from "./ForYou.module.scss";
import pomarancza from "src/assets/Graphics/GosiaPomarancza.png";
//@ts-ignore
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router";
import { Footer } from "src/Components/Footer/Footer";

export const ForYou = () => {

   const scrollWithOffset = (el: any, offset: number) => {
     const elementPosition = el.offsetTop - offset;
     window.scroll({
       top: elementPosition,
       left: 0,
       behavior: "smooth",
     });
   };
const { pathname } = useLocation();
  return (
    <>
      <Navigation />
      <article className={styles.wrapper}>
        <section className={styles.hero}>
          <PageTitle text={"jak najszybciej osiągniesz swój cel?"} />
          <picture>
            <source srcSet={forYouDesktop} media="(min-width: 400px)" />
            <img src={forYouMobile} alt="przekrojone owoce" />
          </picture>
          <div className={styles.point1}>
            <PointWithText
              pointNumber={1}
              primaryText="Umów się na konsultację dietetyczną"
              secondaryText={
                <>
                  poprzez{" "}
                  <HashLink
                    smooth
                    scroll={(el: any) => scrollWithOffset(el, 150)}
                    to={`${pathname}#newsletter`}
                  >
                    formularz kontaktowy
                  </HashLink>{" "}
                  lub <a href="tel:+48799288583">telefonicznie.</a>
                </>
              }
            />
          </div>
          <div className={styles.point2}>
            <PointWithText
              pointNumber={2}
              primaryText="wypełnij dzienniczek żywieniowy oraz, formularz z wywiadem żywieniowym"
              secondaryText="które otrzymasz drogą mailową, gdy umówisz się na pierwszą wizytę i odeślij je do mnie"
            />
          </div>
          <div className={styles.point3}>
            <PointWithText
              pointNumber={3}
              primaryText="przygotuj wyniki badań"
              secondaryText="Jeśli posiadasz aktualne wyniki badań (nie starsze niż 6 miesięcy) przygotuj je na pierwszą konsultację. Jeśli dopiero planujesz wykonać badania, przeczytaj jakie są niezbędne i jak się do nich przygotować"
            />
          </div>
        </section>
        <PreparationBoxes />
        <section className={styles.restPoints}>
          <div className={styles.point4}>
            <PointWithText
              pointNumber={4}
              primaryText="pierwsza konsultacja"
              secondaryText="To nasze pierwsze spotkanie, czyli czas kiedy się poznajemy. Bardzo zależy mi na Twoim dobrym samopoczuciu, więc jeśli to spotkanie online lub rozmowa telefoniczna, znajdź sobie wygodne miejsce, przygotuj coś do picia i poczekaj na kontakt z mojej strony o wyznaczonej godzinie. Pierwsza konsultacja trwa ok. 60 minut. Dzięki temu, że już wcześniej w wolnej chwili wypełnisz potrzebne dokumenty na naszym pierwszym spotkaniu omówimy Twoje nawyki żywieniowe oraz wyniki badań, by jak najlepiej dopasować do Ciebie plan żywieniowy. Kolejnym krokiem będzie wyznaczenie celu i dobranie najlepszej drogi do jego osiągnięcia. Możesz liczyć na ciągłe wsparcie i motywację!"
              wider
            />
          </div>
          <div className={styles.point5}>
            <PointWithText
              pointNumber={5}
              primaryText="druga konsultacja"
              secondaryText="To omówienie planu żywieniowego, stworzonego specjalnie dla Ciebie na podstawie pierwszej konsultacji, a także rozpoczęcie edukacji żywieniowej, byś nauczył/a się komponować prawidłowo posiłki oraz samodzielnie dokonywał/a prawidłowych wyborów żywieniowych."
              wider
            />
          </div>
          <div className={`${styles.pointWithPhoto} ${styles.point6}`}>
            <PointWithText
              pointNumber={6}
              primaryText="konsultacja kontrolna"
              secondaryText="Odbywa się w zależności od Twoich potrzeb co 2-3 tygodnie po rozpoczęciu stosowania jadłospisu. Na takiej wizycie omawiamy postępy 
dietoterapii, oraz przy wystąpieniu trudności, omawiamy je i rozwiązujemy. Kontynuujemy również edukację żywieniową."
              wider
            />
            <img
              className={styles.small}
              src={pomarancza}
              alt="Gosia z pomarańczą"
            />
          </div>
          <div className={styles.point7}>
            <PointWithText
              pointNumber={7}
              primaryText="osiągnięcie celu"
              secondaryText="Dzięki regularnemu stosowaniu zasad zdrowego odżywiania, staną się one Twoim nawykiem żywieniowym, a Ty będziesz na stałe cieszyć się większą ilości energii, lepszym samopoczuciem oraz zdrowiem i wymarzoną sylwetką!"
              wider
            />
          </div>
          <img
            className={styles.big}
            src={pomaranczaBig}
            alt="Gosia z pomarańczą"
          />
        </section>
      </article>
      <Footer />
    </>
  );
};
