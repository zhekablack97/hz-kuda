import React from "react";
import styles from "./Container.module.scss";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ICard> = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default Container;
