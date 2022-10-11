import Drive from './Drive';
import drives from '../../data/drives.json';
import styles from './DrivesList.module.scss';

const DrivesList = () => {
  return (
    <ul className={styles.DrivesList}>
      {drives.map((drive, i) => (
        <Drive key={i} title={drive.title} text={drive.text} />
      ))}
    </ul>
  );
};

export default DrivesList;
