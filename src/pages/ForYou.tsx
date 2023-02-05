import { Navigation } from "../Components/Navigation/Navigation";
import { PageTitle } from "../Components/PageTitle/PageTitle";
import forYouMobile from "src/assets/Graphics/for-you-hero-mobile.png";
import { PointWithText } from "src/Components/PointWithText/PointWithText";
import { PreparationBoxes } from "src/Components/Organisms/PreparationBoxes/PreparationBoxes";
import styles from "./ForYou.module.scss"
import pomarancza from "src/assets/Graphics/GosiaPomarancza.png"

export const ForYou = () => {
  return (
    <>
      <Navigation />
      <article className={styles.wrapper}>
        <section>
          <PageTitle text={"jak najszybciej osiągniesz swój cel?"} />
          <img src={forYouMobile} alt="przekrojone owoce" />
        </section>
        <section>
          <PointWithText
            pointNumber={1}
            primaryText="Umów się na konsultację dietetyczną"
            secondaryText={
              <>
                poprzez <a href="#">formularz kontaktowy</a> lub{" "}
                <a href="#">telefonicznie.</a>
              </>
            }
          />
          <PointWithText
            pointNumber={2}
            primaryText="wypełnij dzienniczek żywieniowy oraz formularz z wywiadem żywieniowym "
            secondaryText="które otrzymasz drogą mailową, gdy umówisz się na pierwszą wizytę i odeślij je do mnie"
          />
          <PointWithText
            pointNumber={3}
            primaryText="przygotuj wyniki badań"
            secondaryText="Jeśli posiadasz aktualne wyniki badań (nie starsze niż 6 miesięcy) przygotuj je na pierwszą konsultację. Jeśli dopiero planujesz wykonać badania, przeczytaj jakie są niezbędne i jak się do nich przygotować"
          />
        </section>
        <PreparationBoxes />
        <section>
          <PointWithText
            pointNumber={4}
            primaryText="pierwsza konsultacja"
            secondaryText="To nasze pierwsze spotkanie, czyli czas kiedy się poznajemy. Bardzo zależy mi na Twoim dobrym samopoczuciu, więc jeśli to spotkanie online lub rozmowa telefoniczna, znajdź sobie wygodne miejsce, przygotuj coś do picia i poczekaj na kontakt z mojej strony o wyznaczonej godzinie. Pierwsza konsultacja trwa ok. 60 minut. Dzięki temu, że już wcześniej w wolnej chwili wypełnisz potrzebne dokumenty na naszym pierwszym spotkaniu omówimy Twoje nawyki żywieniowe oraz wyniki badań, by jak najlepiej dopasować do Ciebie plan żywieniowy. Kolejnym krokiem będzie wyznaczenie celu i dobranie najlepszej drogi do jego osiągnięcia. Możesz liczyć na ciągłe wsparcie i motywację!"
          />
          <PointWithText
            pointNumber={5}
            primaryText="druga konsultacja"
            secondaryText="To omówienie planu żywieniowego, stworzonego specjalnie dla Ciebie na podstawie pierwszej konsultacji, a także rozpoczęcie edukacji żywieniowej, byś nauczył/a się komponować prawidłowo posiłki oraz samodzielnie dokonywał/a prawidłowych wyborów żywieniowych."
          />
          <div className={styles.pointWithPhoto}>
            <PointWithText
              pointNumber={6}
              primaryText="konultacja kontrolna"
              secondaryText="Odbywa się w zależności od Twoich potrzeb co 2-3 tygodnie po rozpoczęciu stosowania jadłospisu. Na takiej wizycie omawiamy postępy 
dietoterapii, oraz przy wystąpieniu trudności, omawiamy je i rozwiązujemy. Kontynuujemy również edukację żywieniową."
            />
            <img src={pomarancza} alt="Gosia z pomarańczą" />
          </div>
        </section>
      </article>
    </>
  );
};
