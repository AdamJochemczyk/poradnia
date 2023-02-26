import React from "react";
import styles from "./TextContainer.module.scss";

interface TextContainerProps {
  children: React.ReactNode;
  styleName?:
    | "default"
    | "halfScreen"
    | "withBottomMargin"
    | "almostHalfScreen"
    | "halfScreenOnMobile";
}

export const TextContainer = ({
  children,
  styleName = "default",
}: TextContainerProps) => {
  const containerClass = {
    default: styles.textContainer,
    halfScreen: styles.textContainer__halfScreen,
    withBottomMargin: styles.textContainer__withBottomMargin,
    almostHalfScreen: styles.textContainer__almostHalfScreen,
    halfScreenOnMobile: styles.textContainer__halfScreenOnMobile,
  };

  return <div className={containerClass[styleName]}>{children}</div>;
};
