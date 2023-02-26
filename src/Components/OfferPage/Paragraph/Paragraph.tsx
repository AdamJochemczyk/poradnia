import React from "react";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  text?: string | JSX.Element;
  spanText?: string;
  extraText?: string;
  styleName?: "default" | "small" | "smallPackages";
}

export const Paragraph = ({
  text,
  spanText,
  extraText,
  styleName = "default",
}: ParagraphProps) => {
  const paragraphClass = {
    default: styles.description,
    small: styles.description__small,
    smallPackages: styles.description__smallPackages,
  };

  return (
    <p className={paragraphClass[styleName]}>
      {text && text}
      {spanText && <span>{spanText}</span>}
      {extraText && extraText}
    </p>
  );
};
