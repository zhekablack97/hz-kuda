import React from "react";
import Link from "next/link";
import { IFooterLink } from "@type/type";
import { useRouter } from "next/router";

import styles from "./FooterLinkCategory.module.scss";

/**
 *
 * @returns FooterLinkCategory - компонент ссылки категории в футере
 */
const FooterLinkCategory: React.FC<IFooterLink> = ({ href, label }) => {
  const router = useRouter();

  const activCategory = router.asPath;

  return (
    <Link href={href}>
      <a className={href === activCategory ? styles.activ : ""}>
        <span>{label}</span>
      </a>
    </Link>
  );
};
export default FooterLinkCategory;
