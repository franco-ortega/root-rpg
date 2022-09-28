import Image from 'next/image';
import RootArtwork from '../../public/images/root-capture.png';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Image src={RootArtwork} alt='' />
      <Nav />
      {/* <nav>
        <ul>
          <li>Playbooks (classes)</li>
          <li>Players Guide</li>
          <li>Drives</li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Header;
