import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Home = () => {
  const [catFact, setCatFact] = useState();

  useEffect(() => {
    console.log('Fetching the cat fact now.');
    // Fetch the cat fact
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(({ fact, isMock }) => setCatFact(isMock ? fact : 'We will show you the cat fact later!'))
      .catch(_ => _);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cypress - MSW</title>
      </Head>

      <main className={styles.main}>
        { catFact && (
          <span className={styles.apiResultText}>
            { `Fact: ${ catFact }` }
          </span>
        ) }
      </main>
    </div>
  );
};

export default Home;