import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>Playbooks</li>
        <li>Players Guide</li>
        <li>Drives</li>
      </ul>
    </nav>
  );
};

export default Nav;
