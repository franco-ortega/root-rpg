import Image from 'next/image';
import PlaybookList from '../playbooks/PlaybookList';
import GambleImg from '../../public/images/root-gamble.jpg';
import styles from './Playbooks.module.scss';

const Playbooks = () => {
  return (
    <div className={styles.Playbooks}>
      <h1>Playbooks</h1>
      <p>Vagabond character sheets.</p>
      <div>
        <Image src={GambleImg} alt='' />
      </div>
      <PlaybookList />
    </div>
  );
};

export default Playbooks;
