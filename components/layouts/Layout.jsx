/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Header from '../header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Root RPG</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Emilys+Candy&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
