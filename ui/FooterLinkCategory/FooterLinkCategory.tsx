import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import Link from "next/link";

import styles from "./FooterLinkCategory.module.scss";
import { IFooterLink } from "@type/type";

/**
 *
 * @returns Footer - компонент подвала сайта
 */
const FooterLinkCategory: React.FC<IFooterLink> = ({
  href,
  actions,
  category,
  label,
}) => {
  const activCategory = useAppSelector((state) => state.activCategory.category);
  const dispatch = useAppDispatch();

  return (
    <Link href={href}>
      <a
        onClick={() => dispatch(actions())}
        className={`${styles.link} ${
          activCategory === category ? styles.activ : ""
        }`}
      >
        {label}
      </a>
    </Link>
  );
};
export default FooterLinkCategory;
