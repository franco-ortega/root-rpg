import Image from 'next/image';
import TravelImg from '../../public/images/root-travel.jpg';
import Term from '../info/Term';
import moves from '../../data/moves.json';
import styles from './Moves.module.scss';

const Moves = () => {
  return (
    <div className={styles.Moves}>
      <h1>Moves</h1>
      <p>How a vagabond gets shit done.</p>
      <div>
        <Image src={TravelImg} alt='' />
      </div>
      <ul>
        {moves.map((move, i) => (
          <Term key={i} term={move.move} text={move.text} />
        ))}
      </ul>
    </div>
  );
};

export default Moves;
