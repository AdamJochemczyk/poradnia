import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  styleName?: "default" | "hideOnDesktop" | "showOnDesktop";
  handleClick?: () => void;
  transparent?: boolean;
  small?: boolean;
}

export const Button = ({
  text,
  styleName = "default",
  transparent,
  small,
  handleClick,
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
    >
      {text}
    </button>
  );
};
