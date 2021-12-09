import { GetServerSideProps, NextPage } from 'next';
import { Article } from './index';

const NewPage: NextPage<Article> = ({
  title,
  id,
  albumId,
  url,
  thumbnailUrl
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>Id: {id}</h4>
    </div>
  );
};
export default NewPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { params } = ctx;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params?.id}`
  );
  const data = await res.json();
  return {
    props: data
  };
};
