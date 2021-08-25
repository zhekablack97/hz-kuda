import React from "react";
import Link from "next/link";

import styles from "./FooterLinkCategory.module.scss";
import { IFooterLink } from "@type/type";
import { useAppDispatch, useAppSelector } from "hook/reduxHook";

/**
 *
 * @returns FooterLinkCategory - компонент ссылки категории в футере
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
        <span>{label}</span>
      </a>
    </Link>
  );
};
export default FooterLinkCategory;
