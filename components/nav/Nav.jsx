import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Drives</li>
        <li>Playbooks</li>
        <li>Players Guide</li>
      </ul>
    </nav>
  );
};

export default Nav;
