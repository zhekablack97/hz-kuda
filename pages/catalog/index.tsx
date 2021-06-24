import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllPostIds } from "../../lib/posts";

const Catalog: NextPage = () => {
  return (
    <>
      <Head>
        <title>разводящая страница каталога</title>
      </Head>
      <div> Catalog</div>
      <Image src="/images/profile.jpg" height={144} width={144} alt="BORASCO" />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
};
export default Catalog;
