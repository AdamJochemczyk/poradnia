import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  styleName?: "default" | "hideOnDesktop" | "showOnDesktop";
  handleClick?: (() => void) | ((e:any)=>void);
  transparent?: boolean;
  small?: boolean;
  disabled?:boolean;
  type?: "button" | "submit"
}

export const Button = ({
  text,
  styleName = "default",
  transparent,
  small,
  handleClick,
  disabled=false,
  type="button"
}: ButtonProps) => {
  const containerClass = {
    default: styles.btn,
    hideOnDesktop: styles.btn__hideOnDesktop,
    showOnDesktop: styles.btn__showOnDesktop,
  };

  return (
    <button
      onClick={handleClick}
      className={`${containerClass[styleName]} ${
        transparent ? styles.transparent : ""
      } ${small ? styles.small : ""}`}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};
