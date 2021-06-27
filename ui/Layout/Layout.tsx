import Footer from "@ui/Footer";
import Head from "next/head";
import React from "react";
import styles from "./Layout.module.scss";

export const siteTitle = "Next.js Sample Website";

interface Ilayout {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
}

/**
 * обертка над контентом на странице
 * принимает:
 *
 * @param title - заголовок страницы
 * @param children - все что между header и footer
 *
 *
 */
const Layout: React.FC<Ilayout> = ({
  title = "Тестовая страница",
  children,
  ...props
}) => {
  return (
    <div className={styles.layout} {...props}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
