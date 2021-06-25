import { NextPage } from "next";
import React from "react";
import { Counter } from "../../ui/Counter/Counter";
import Layout from "../../ui/Layout/Layout";

const CounterPage: NextPage = () => {
  return (
    <Layout>
      <Counter></Counter>
    </Layout>
  );
};
export default CounterPage;
