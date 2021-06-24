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
  <section>
    <h1>Помочь с выбором?</h1>
    <a href="">доставка домаой</a> <br />
    <a href="">отдых с компанией друзей</a> <br />
    <a href="">активный отдых</a> <br />
    <a href=""> поужинать с кем-то вечром</a> <br />
    <a href="">не знаешь хороший бар</a>
    <a href="">развлечение на 10+ человек</a> <br />
    <a href="">не хватает спорта в жизни </a> <br />
    <a href=""></a>
  </section>
);
export default Home;
