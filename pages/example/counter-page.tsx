import { NextPage } from "next";
import React from "react";
import { Counter } from "../../components/Counter/Counter";
import Layout from "../../components/Layout/Layout";

const CounterPage: NextPage = () => {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  );
};
export default CounterPage;
