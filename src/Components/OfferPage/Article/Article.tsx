import React from "react";
import styles from "./Article.module.scss";

interface ArticleProps {
  children: React.ReactNode;
}

export const Article = ({ children }: ArticleProps) => {
  return <article className={styles.article}>{children}</article>;
};
