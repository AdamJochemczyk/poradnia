import style from "./Fundamentals.module.scss"
import { FUNDAMENTALS } from "../../Utilities/mocks"

function Fundamentals() {
  return (
    <div className={style.fundamentals}>
        <h2 className={style.fundamentals__header}>FUNDAMENTY SKUTECZNEJ DIETY</h2>
        <div className={style.content}>
            {FUNDAMENTALS.map((element, index) => {
                return (
                    <div className={style.content__element} key={index}>
                        <img src={element.image} alt="fundamenty" className={style.image} />
                        <p className={style.text}><span className={style.bold}>{element.title}</span> {element.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Fundamentals