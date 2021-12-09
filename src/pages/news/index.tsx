import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { ArticlePreview } from '../../components';

interface NewsPageProps {
  articles: Article[];
}

export interface Article {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const NewsPage: NextPage<NewsPageProps> = ({ articles }) => {
  const [size, setSize] = useState(10);
  return (
    <Fragment>
      <Head>
        <title>Новости</title>
      </Head>
      <div>
        <div className="grid gap-2 grid-cols-2">
          {articles.slice(0, size).map(article => (
            <Link href={`/news/${article.id}`} passHref={true} shallow={true}>
              <a>
                <ArticlePreview key={article.id} {...article} />
              </a>
            </Link>
          ))}
        </div>
        <button onClick={() => setSize(prevState => prevState + 10)}>
          Подрузить еще
        </button>
      </div>
    </Fragment>
  );
};
export default NewsPage;

export const getStaticProps: GetStaticProps = async ctx => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();
  return {
    props: {
      articles: data
    }
  };
};
