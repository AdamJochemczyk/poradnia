import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  handleClick?: () => void;
  transparent?: boolean;
  small?: boolean;
}
export const Button = ({ text, handleClick, transparent,small }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`${style.btn} ${transparent ? style.transparent : ""} ${
        small ? style.small : ""
      }`}
    >
      {text}
    </button>
  );
};
