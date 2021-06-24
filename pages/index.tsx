import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.scss";
import { TypeSortedPost } from "../type";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

interface IHome {
  allPostsData: TypeSortedPost[];
}

const Home: NextPage<IHome> = ({ allPostsData }) => (
  <Layout home>
    {/* Keep the existing code here */}

    {/* Add this <section> tag below the existing <section> tag */}
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/catalog/${id}`}>{title}</Link>
            <br />
            {id}
            <br />
            {date && date}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);
export default Home;
