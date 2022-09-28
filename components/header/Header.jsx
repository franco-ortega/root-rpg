import Image from 'next/image';
import RootArtwork from '../../public/images/root-capture.png';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Image src={RootArtwork} alt='' />
      <Nav />
    </div>
  );
};

export default Header;
