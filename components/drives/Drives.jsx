import DrivesList from './DrivesList';
import Image from 'next/image';
import RaccoonImg from '../../public/images/vagabond-raccoon.png';
import RabbitImg from '../../public/images/woodland-bunny.png';
import styles from './Drives.module.scss';

const Drives = () => {
  return (
    <div className={styles.Drives}>
      <div>
        <Image src={RaccoonImg} alt='' />
        <div>
          <h1>Drives</h1>
          <p>A vagabond selects two drives from their playbook.</p>
        </div>
        <Image src={RabbitImg} alt='' />
      </div>
      <p>A vagabond selects two drives from their playbook.</p>
      <DrivesList />
    </div>
  );
};

export default Drives;
