import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Домашнаяя страница</title>
      </Head>
      <div>index page</div>
    </Fragment>
  );
};

export default Home;
