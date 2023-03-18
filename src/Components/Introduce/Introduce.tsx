import styles from "./Introduce.module.scss"
import gosia from "../../assets/Photos/fffff.png"

function Introduce() {
  return (
    <div className={styles.introduce}>
      <h2 className={styles.introduce__header}>POZNAJ MNIE</h2>
      <div className={styles.introduce__text}>
        <div className={styles.introduce__left}>
          <p>
            <span className={styles.bold}>Cześć!</span>
          </p>
          <p>
            Nazywam się <span className={styles.bold}>Małgorzata Baron</span> i
            jestem dyplomowanym dietetykiem klinicznym oraz edukatorką żywieniową. Swoją wiedzę zdobyłam
            studiując Dietetykę na Śląskim Uniwersytecie Medycznym w Katowicach
            oraz uczestnicząc w wielu kursach i szkoleniach.
          </p>
          <img
            src={gosia}
            alt="Gosia holding mandarines"
            className={styles.image}
          />
          <p>
            Żywienie jest kluczowym elementem naszego zdrowia i dobrego
            samopoczucia. Moja Poradnia powstała z myślą o osobach, które nie
            tylko chcą zgubić zbędne kilogramy, ale także nauczyć się świadomego
            odżywiania, czyli dokonywania prawidłowych wyborów żywieniowych i
            komponowania posiłków, również po zakończeniu stosowania
            jadłospisów.
          </p>
          <p>
            Także osoby chore, dla których dietoterapia jest kluczowa w
            poprawieniu wyników i samopoczucia na co dzień, dzięki edukacji
            żywieniowej i regularnemu stosowaniu zasad zdrowego odżywiania
            zmienią dietę w stałe nawyki.
          </p>
        </div>
        <div>
          <img
            src={gosia}
            className={styles.image_desktop}
            alt="Gosia z pomarańczą"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduce