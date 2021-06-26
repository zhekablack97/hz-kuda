import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { food, entertainment, nature } from "lib/ActivCategory/activCategory";
import FooterLinkCategory from "@ui/FooterLinkCategory";
import { footerLink } from "@data/dataFooter";

/**
 *
 * @returns Footer - компонент подвала сайта
 */
const Footer: React.FC = () => {
  const activCategory = useAppSelector((state) => state.activCategory.category);

  return (
    <footer>
      сейчас активна категория {activCategory}
      {footerLink.map((link, index) => (
        <FooterLinkCategory key={index} {...link} />
      ))}
    </footer>
  );
};
export default Footer;
