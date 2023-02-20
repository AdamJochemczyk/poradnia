import style from "./Button.module.scss";

export const Button = ({ text }: { text: string }) => {
    return <button className={style.btn}>{text}</button>;
};
