import Layout from "@ui/Layout";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => (
  <Layout>
    <Link href="/">на главную</Link>
  </Layout>
);
export default Home;
