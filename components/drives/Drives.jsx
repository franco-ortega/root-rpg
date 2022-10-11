import DrivesList from './DrivesList';
import styles from './Drives.module.scss';

const Drives = () => {
  return (
    <div className={styles.Drives}>
      <h1>Drives</h1>
      <p>Each character selects 2 drives from their Playbook.</p>
      <DrivesList />
    </div>
  );
};

export default Drives;
