import { useState } from "react"
import styles from "./Navigation.module.scss"
import photo from "../../assets/Photos/logoZielone.png"

export const MenuToggled = ({closeAction}:{closeAction:()=>void}) => {

    return (
        <div className={styles.menu}>
            <div className={styles.menu__topGradient} />
            <div className={styles.menu__close} />
            <div className={styles.menu__links}>
                <p className={styles.menu__option}>OFERTA</p>
                <p className={styles.menu__option}>DLA CIEBIE</p>
                <p className={styles.menu__option}>ZAPISZ SIĘ</p>
                <p className={styles.menu__option}>KONTAKT</p>
            </div>
            <div className={styles.menu__bottomGradient} />
            <button onClick={() => closeAction()} className={styles.menu__close}>
                <div className={styles.close__barP} />
                <div className={styles.close__barL} />
            </button>

        </div>
    )

}

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img src={photo} alt="Logo" />
            </div>
            <div className={styles.navbar__handle} onClick={handleClick}>
                <div className={styles.handle__element}></div>
                <div className={styles.handle__element}></div>
                <div className={styles.handle__element}></div>
            </div>
            <div className={styles.links__wide}>
                <p className={styles.menu__option}>OFERTA</p>
                <p className={styles.menu__option}>DLA CIEBIE</p>
                <p className={styles.menu__option}>ZAPISZ SIĘ</p>
                <p className={styles.menu__option}>KONTAKT</p>
            </div>
        </nav>
        {isOpen && <MenuToggled closeAction={() => setIsOpen(false)}/> }
        </>
    )
}

export default Navigation