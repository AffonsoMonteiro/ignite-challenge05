import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  return (
    <>
      <Header />
      <img src="" alt="" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 mar 2022
              </li>
              <li>
                <FiUser />
                Affonso
              </li>
              <li>
                <FiClock />
                5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Titulo Sessão</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur <a href="#" /> adipiscing elitLorem ipsum dolor sit <strong>safas</strong> amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </article>
        </div>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
