import Image from 'next/image';
import FoxImg from '../../public/images/woodland-fox.png';
import OtterImg from '../../public/images/woodland-otter.png';
import Term from '../info/Term';
import terms from '../../data/terms.json';
import videos from '../../data/videos.json';
import styles from './Home.module.scss';
import Video from '../info/Video';

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
          {videos.map((video, i) => (
            <Video
              key={i}
              url={video.url}
              title={video.title}
              time={video.time}
              text={video.text}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
