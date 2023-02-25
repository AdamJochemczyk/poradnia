import style from "./PageTitle.module.scss";

export const PageTitle = ({ text }: { text: string }) => {
    return <h1 className={style.header}>{text}</h1>;
};
