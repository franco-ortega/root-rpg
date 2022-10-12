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
          <p>The motivations for a vagabond.</p>
        </div>
        <Image src={RabbitImg} alt='' />
      </div>
      <p>The motivations for a vagabond.</p>
      <DrivesList />
    </div>
  );
};

export default Drives;
