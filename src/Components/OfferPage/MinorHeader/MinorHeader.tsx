import React from "react";
import styles from "./MinorHeader.module.scss";

interface ParagraphProps {
    header: string;
    styleName?: "default" | "green";
}

export const MinorHeader = ({ header, styleName = "default" }: ParagraphProps) => {
    const headerClass = {
        default: styles.header,
        green: styles.header__green,
    };

    return <h2 className={headerClass[styleName]}>{header}</h2>;
};
