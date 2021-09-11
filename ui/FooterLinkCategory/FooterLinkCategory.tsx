import React from "react";
import Link from "next/link";

import styles from "./FooterLinkCategory.module.scss";
import { IFooterLink } from "@type/type";

/**
 *
 * @returns FooterLinkCategory - компонент ссылки категории в футере
 */
const FooterLinkCategory: React.FC<IFooterLink> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a>
        <span>{label}</span>
      </a>
    </Link>
  );
};
export default FooterLinkCategory;
