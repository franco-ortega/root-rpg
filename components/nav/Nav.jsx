import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='drives'>Drives</Link>
        </li>
        <li>
          <Link href='playbooks'>Playbooks</Link>
        </li>
        <li>
          <Link href='players-guide'>Players Guide</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
