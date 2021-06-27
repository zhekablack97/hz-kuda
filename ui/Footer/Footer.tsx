import React from "react";
import { useAppSelector } from "../../hook/hooks";
import FooterLinkCategory from "@ui/FooterLinkCategory";
import { footerLink } from "@data/dataFooter";
import styles from "./Footer.module.scss";
/**
 *
 * @returns Footer - компонент подвала сайта
 */
const Footer: React.FC = () => {
  const activCategory = useAppSelector((state) => state.activCategory.category);

  return (
    <footer className={styles.footer}>
      сейчас активна категория {activCategory}
      <div className={styles.wrapper}>
        {footerLink.map((link, index) => (
          <FooterLinkCategory key={index} {...link} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
