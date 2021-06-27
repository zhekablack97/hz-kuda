import React from "react";
import styles from "./Section.module.scss";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * компонент Секциии, главная обертка нед элементами
 */
const Section: React.FC<ICard> = ({ children, className, ...props }) => {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
