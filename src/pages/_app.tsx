import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import { Menu } from '../components';

const navigation = [
  {
    href: '/',
    label: 'Домашнаяя страница'
  },
  {
    href: '/news',
    label: 'Новости'
  }
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="flex justify-center p-2">
        <Menu items={navigation} />
      </div>
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
