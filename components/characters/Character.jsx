import styles from './Character.module.scss'

const Character = ({ character, drives, nature, connections }) => {
  return (
    <li className={styles.Character}>
      <h2>{character}</h2>
      <ul>
        <li>
          Drives (pick 2): {drives[0].title}, {drives[1].title}, {drives[2].title}
          , {drives[3].title}
        </li>
        <li>
          Nature (pick 1): {nature[0].title}, {nature[1].title}
        </li>
        <li>
          Connections (both): {connections[0].title}, {connections[1].title}
        </li>

      </ul>
    </li>
  );
};

export default Character;
