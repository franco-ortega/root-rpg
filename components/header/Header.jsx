import Image from 'next/image';
import RunawayImg from '../../public/images/root-runaway.png';
import Nav from '../nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <Image src={RunawayImg} alt='' />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
