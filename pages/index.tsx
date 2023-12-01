import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/about">About</Link>
    </>
  );
};

export default IndexPage;
