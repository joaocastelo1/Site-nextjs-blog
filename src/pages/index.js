import Head from 'next/head';
import Link from 'next/link';

import { Layout, siteTitle } from '../components/Layout/Layout';
import { Date } from '../components/Date/Date';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        João Castelo de Sousa Ferreira é um desenvolvedor front-end especializado em tecnologias 
        como HTML, CSS, JavaScript, TypeScript, React e Next.js. Com uma paixão por criar interfaces 
        de usuário dinâmicas e responsivas, ele combina habilidades técnicas com foco em performance e 
        usabilidade. João está sempre explorando as mais recentes tendências do desenvolvimento web para 
        entregar soluções inovadoras e eficientes.{' '}
          <a href="https://www.linkedin.com/in/joao-castelo-ferreira/" target="_blank">LinkedIn</a>.
        </p>
        <p>
          (Este é um site de exemplo - você criará um site como este em{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
