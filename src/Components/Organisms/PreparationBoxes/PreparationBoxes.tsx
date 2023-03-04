import { useState } from "react";
import showDetails from "src/assets/Graphics/showDetails.svg";
import styles from "./PreparationBoxes.module.scss";

export const PreparationBoxes = () => {
    const [showDetailsBox, setShowDetailsBox] = useState(false);

    const toggleDetailsBox = () => {
        setShowDetailsBox(prev => !prev);
    };
    //TODO: link do pdfa prawdopodobnie
    return (
        <section className={styles.preparation}>
            <div className={`${styles.box} ${styles.box1}`}>
                <p className={styles.title}>Wykaz badań</p>
                <div className={styles.twoListLayout}>
                    <ul>
                        <li>morfologia + rozmaz krwi</li>
                        <li>
                            glukoza, (u osób z grup ryzyka oraz z problemami z glikemia / insulina:
                            doustny test tolerancji glukozy, poziom insuliny, HbA1c)
                        </li>
                        <li>lipidogram: cholesterol całkowity, HDL, LDL, Trójglicerydy</li>
                        <li>enzymy wątrobowe (AST, ALT, GGTP)</li>
                    </ul>
                    <ul>
                        <li>elektrolity (Mg, Ca, Na, K)</li>
                        <li>TSH, FT3, FT4</li>
                        <li>OB</li>
                        <li>kreatynina</li>
                        <li>kwas moczowy</li>
                        <li>mocznik</li>
                    </ul>
                </div>
                <div className={styles.displayDetailsBoxButton} onClick={toggleDetailsBox}>
                    <p>Jak przygotować się do badania?</p>
                    <img
                        src={showDetails}
                        alt="button"
                        className={showDetailsBox ? styles.rotate : ""}
                    />
                </div>
            </div>
            {showDetailsBox ? (
                <div className={`${styles.box} ${styles.box2}`}>
                    <div className={styles.close} onClick={toggleDetailsBox}>
                        X
                    </div>
                    <p className={styles.title}>Jak przygotować się do badania?</p>
                    <div className={styles.oneListLayout}>
                        <ul>
                            <li>Do punktu pobrań należy zgłosić się w godzinach rannych</li>
                            <li>
                                Badanie powinno być wykonane na czczo, najlepiej 12-16 godzin po
                                ostatnim posiłku.
                            </li>
                            <li>W dniu badania nie należy pić żadnych płynów oprócz wody</li>
                            <li>
                                Dobę przed badaniami nie należy pić alkoholu, wykonywać intensywnych
                                ćwiczeń i narażać się na nadmierny stres.
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
            <div className={`${styles.box} ${styles.box3}`}>
                <p className={styles.title}>Co zrobić, by otrzymać zniżkę 10% na badanie krwi?</p>
                <div className={styles.oneListLayout}>
                    <ul>
                        <li>
                            Pobierz specjalne skierowanie z kodem rabatowym, klikając{" "}
                            <a href="#" className={styles.discountLink}>
                                tutaj
                            </a>
                        </li>
                        <li>
                            Wydrukuj kartę, uzupełnij swoje dane i zaznacz "
                            <span className={styles.bolder}>X</span>" przy badaniach, które chcesz
                            wykonać
                        </li>
                        <li>
                            Z wypełnionym skierowaniem udaj się do najbliższego punktu Śląskich
                            Laboratiriów Analitycznych lub punktu Badaj.To
                        </li>
                        <li>
                            Pokaż wypełnione skierowanie lub zdjęcie wypełnionego skierowania w
                            punkcie pobrań
                        </li>
                    </ul>
                </div>
                <div className={styles.help}>
                    jeśli nie masz możliwości wydruku, poproś mnie o pomoc
                </div>
            </div>
        </section>
    );
};
