import Image from 'next/image';
import FoxImg from '../../public/images/woodland-fox.png';
import OtterImg from '../../public/images/woodland-otter.png';
import Term from '../info/Term';
import terms from '../../data/terms.json';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div>
        <Image src={FoxImg} alt='' />
        <div>
          <h1>Root RPG</h1>
          <p>Some terms to help you find your footing.</p>
        </div>
        <Image src={OtterImg} alt='' />
      </div>
      <p>Some terms to help you find your footing.</p>
      <ul>
        {terms.map((term, i) => (
          <Term key={i} term={term.term} text={term.text} />
        ))}
      </ul>
      <section>
        <h3>Root RPG Videos</h3>
        <p>A few moving pictures for those who want to see and hear more.</p>
        <ul>
          <li>
            <a
              href='https://www.youtube.com/watch?v=E_tr38ar_nc&ab_channel=GoodTimeSociety'
              target='_blank'
              rel='noreferrer'
            >
              Tutorial
            </a>{' '}
            (15 min) - rules summary of player actions
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=XK4rl0Rxnnc&ab_channel=ReallyDicey'
              target='_blank'
              rel='noreferrer'
            >
              Review
            </a>{' '}
            (25 min) - more overall look at the game and world
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=oXaQri26xXU&ab_channel=Rootless%3AMight%2CRight...andArson'
              target='_blank'
              rel='noreferrer'
            >
              Character Sheet
            </a>{' '}
            (16 min) - lofi close-up look at character stats
          </li>
          <li>
            <a
              href='https://www.youtube.com/watch?v=G5iQF4gz13M&ab_channel=Dicebreaker'
              target='_blank'
              rel='noreferrer'
            >
              Playthrough
            </a>{' '}
            (60 min) - watch some people play the Root RPG!
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
