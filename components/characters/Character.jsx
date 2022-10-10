import styles from './Character.module.scss'

const Character = ({ character, drives, nature, connections }) => {
  return (
    <li className={styles.Character}>
      <h2>{character}</h2>
      <hr />
      <ul>
        <li>
          <span>Drives (pick 2)</span>: {drives[0].title}, {drives[1].title}, {drives[2].title}
          , {drives[3].title}
        </li>
        <li>
        <span>Nature (pick 1)</span>: {nature[0].title}, {nature[1].title}
        </li>
        <li>
        <span>Connections (both)</span>: {connections[0].title}, {connections[1].title}
        </li>

      </ul>
    </li>
  );
};

export default Character;
