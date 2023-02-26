import React from "react";
import styles from "./UnorderedListItem.module.scss";

interface UnorderedListItemProps {
  text: string;
  listItemStyle?: "default" | "dash" | "spacedItem";
}

export const UnorderedListItem = ({
  text,
  listItemStyle = "default",
}: UnorderedListItemProps) => {
  const listItemStyles = {
    default: styles.item,
    dash: styles.itemDash,
    spacedItem: styles.spacedItem,
  };
  return <li className={listItemStyles[listItemStyle]}>{text}</li>;
};
