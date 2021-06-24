import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Date from "../../components/Date";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { TypeSortedPost } from "../../type";
import utilStyles from "../../styles/utils.module.scss";

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

interface IPost {
  postData: TypeSortedPost;
}

const Post: NextPage<IPost> = ({ postData }) => {
  return (
    <Layout title={postData.title}>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};
export default Post;
