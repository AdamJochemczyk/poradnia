import styles from "./HealthCare.module.scss"
import options from "../../assets/Graphics/optionsDiet.svg"
import logo from "../../assets/Photos/logokolor2.png"

function HealthCare() {
  return (
    <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <p className={styles.description}>
        ZADBAJ O SWOJE ZDROWIE BEZ WYCHODZENIA Z DOMU
        </p>
        <div className={styles.care__options}>
            <img src={options} alt="mobile and online diets" className={styles.options__image}/>
        </div>
    </div>
  )
}

export default HealthCare