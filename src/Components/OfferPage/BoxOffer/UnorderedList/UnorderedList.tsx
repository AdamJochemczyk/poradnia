import React from "react";
import styles from "./UnorderedList.module.scss";

interface UnorderedListProps {
  children: React.ReactNode;
}

export const UnorderedList = ({ children }: UnorderedListProps) => {
  return <ul className={styles.list}>{children}</ul>;
};
