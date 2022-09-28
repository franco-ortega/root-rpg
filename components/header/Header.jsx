import Image from 'next/image';
import RootArtwork from '../../public/images/root-capture.png';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <Image src={RootArtwork} alt='' />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
