import Container from "@ui/Container";
import Layout from "@ui/Layout";
import Section from "@ui/Section";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getSortedPostsData } from "../lib/posts";
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

const Home: NextPage<IHome> = () => (
  <Layout>
    <Section>
      <Container>
        <h1>Помочь с выбором?</h1>
        <a href="">доставка домой</a> <br />
        <a href="">отдых с компанией друзей</a> <br />
        <a href="">активный отдых</a> <br />
        <a href=""> поужинать с кем-то вечром</a> <br />
        <a href="">не знаешь хороший бар</a>
        <br />
        <a href="">развлечение на 10+ человек</a> <br />
        <a href="">не хватает спорта в жизни </a> <br />
        <a href="">где бы сейчас отдохнуть от города </a>
      </Container>
    </Section>
  </Layout>
);
export default Home;
