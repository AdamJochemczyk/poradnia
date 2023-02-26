import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  styleName?: "default" | "hideOnDesktop" | "showOnDesktop";
}

export const Button = ({ text, styleName = "default" }: ButtonProps) => {
  const containerClass = {
    default: styles.btn,
    hideOnDesktop: styles.btn__hideOnDesktop,
    showOnDesktop: styles.btn__showOnDesktop,
  };

  return <button className={containerClass[styleName]}>{text}</button>;
};
