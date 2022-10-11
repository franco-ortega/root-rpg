import PlaybookList from '../playbooks/PlaybookList';
import styles from './Playbooks.module.scss';

const Playbooks = () => {
  return (
    <div className={styles.Playbooks}>
      <h1>Playbooks</h1>
      <p>
        Each character picks 2 drives, 1 nature, and both connections.
        Connections are formed with other vagabonds in the group. Both
        connections can apply to a single vagabond or be divided between two
        vagabonds.
      </p>
      <PlaybookList />
    </div>
  );
};

export default Playbooks;
