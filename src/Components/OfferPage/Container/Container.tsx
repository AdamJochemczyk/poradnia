import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  styleName?: "default" | "almostHalfScreen";
}

export const Container = ({
  children,
  styleName = "default",
}: ContainerProps) => {
  const containerClass = {
    default: styles.container,
    almostHalfScreen: styles.container__almostHalfScreen,
  };

  return <div className={containerClass[styleName]}>{children}</div>;
};
