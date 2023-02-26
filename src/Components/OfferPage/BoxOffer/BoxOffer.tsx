import React from "react";
import styles from "./BoxOffer.module.scss";
import { UnorderedList } from "./UnorderedList/UnorderedList";
import { UnorderedListItem } from "./UnorderedListItem/UnorderedListItem";

interface BoxOfferProps {
  title: string;
  data?: string[];
  price?: string;
  titleParagraphStyle?: "default" | "small";
  innerContainerStyle?: "default" | "innerContainer";
  listItemStyle?: "default" | "dash" | "spacedItem";
}

export const BoxOffer = ({
  title,
  data = [],
  price,
  titleParagraphStyle = "default",
  innerContainerStyle = "default",
  listItemStyle = "default",
}: BoxOfferProps) => {
  const titleParagraphStyles = {
    default: styles.boxOffer__title,
    small: styles.boxOffer__title__small,
  };

  const innerContainerStyles = {
    default: "",
    innerContainer: styles.boxOffer__innerContainer,
  };

  return data.length === 0 ? (
    <div className={styles.boxOffer}>
      <div className={styles.boxOffer__innerContainer}>
        <p className={styles.boxOffer__paragraph}>{title}</p>
        <p className={styles.boxOffer__paragraph}>{price}</p>
      </div>
    </div>
  ) : (
    <div className={styles.boxOffer}>
      <p className={titleParagraphStyles[titleParagraphStyle]}>{title}</p>
      <div className={innerContainerStyles[innerContainerStyle]}>
        <UnorderedList>
          {data.map((text) => (
            <UnorderedListItem
              key={text}
              text={text}
              listItemStyle={listItemStyle}
            />
          ))}
        </UnorderedList>
        {price && <p className={styles.boxOffer__paragraph}>{price}</p>}
      </div>
    </div>
  );
};
