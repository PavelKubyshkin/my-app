import Image from 'next/image';
import { FC } from 'react';
import { Article } from '../pages/news';

export const ArticlePreview: FC<Article> = ({
  url,
  thumbnailUrl,
  id,
  albumId,
  title
}) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer p-2 rounded-2xl">
      <h3>{title}</h3>
      <Image className="rounded-lg" height={200} src={url} width={300} />
    </div>
  );
};
