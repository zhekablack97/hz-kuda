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
      <div className={styles.activCategory}>{activCategory}</div>
      <div className={styles.wrapperLink}>
        {footerLink.map((link, index) => (
          <FooterLinkCategory key={index} {...link} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
