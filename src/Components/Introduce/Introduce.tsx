import styles from "./Introduce.module.scss"
import gosia from "../../assets/Photos/fffff.png"

function Introduce() {
  return (
    <div className={styles.introduce}>
        <h2 className={styles.introduce__header}>POZNAJ MNIE</h2>
        <div className={styles.introduce__text}>
            <p><span className={styles.bold}>Cześć</span></p>
            <p>Nazywam się <span className={styles.bold}>Małgorzata Baron</span> i jestem dyplomowanym dietetykiem klinicznym. 
            Swoją wiedzę zdobyłam studiując Dietetykę na Śląskim Uniwersytecie Medycznym w 
            Katowicach oraz uczestnicząc w wielu kursach i szkoleniach. Dietetykiem jestem 
            zarówno z wykształcenia jak i z zamiłowania.</p>
            <img src={gosia} alt="Gosia holding mandarines" className={styles.image} />
            <p><span className={styles.bold}>Co najbardziej lubię w swojej pracy? </span>Pomaganie moim klientom i wspieranie ich w dążeniu do celu. Lubię radość, 
            która towarzyszy im po odebraniu lepszych wyników, polepszeniu samopoczucia na co dzień, utracie zbędnych kilogramów 
            i włożeniu ubrania, które utknęło na dłużej w szafie. A przede wszystkim, uwielbiam ich radość z bycia na diecie!.</p>
            <p>Każdy z nas jest inny, dlatego indywidualne podejście do potrzeb każdego klienta jest dla mnie priorytetem.</p>
        </div>
    </div>
  )
}

export default Introduce