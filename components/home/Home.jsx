import Image from 'next/image';
import FoxImg from '../../public/images/woodland-fox.png';
import OtterImg from '../../public/images/woodland-otter.png';
import TitleAndText from '../info/TitleAndText';
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
    </div>
  );
};

export default Home;
