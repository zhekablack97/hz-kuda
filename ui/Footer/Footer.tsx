import React from "react";
import FooterLinkCategory from "@ui/FooterLinkCategory";
import { footerLink } from "@data/dataFooterLinks";
import styles from "./Footer.module.scss";

/**
 *
 * @returns Footer - компонент подвала сайта
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperLink}>
        {footerLink.map((link, index) => (
          <FooterLinkCategory key={index} {...link} />
        ))}
      </div>
    </footer>
  );
};
export default Footer;
