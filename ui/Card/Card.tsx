import React from "react";
import styles from "./Card.module.scss";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
};

export default Card;
