import Playbook from '../playbooks/Playbook';
import playbookData from '../../data/playbooks.json';
import styles from './PlaybookList.module.scss';

const PlaybookList = () => {
  return (
    <ul className={styles.PlaybookList}>
      {playbookData.map((playbook, i) => (
        <Playbook
          key={i}
          character={playbook.character}
          drives={playbook.drives}
          nature={playbook.nature}
          connections={playbook.connections}
          pdf={`playbooks/${playbook.pdf}`}
        />
      ))}
    </ul>
  );
};

export default PlaybookList;
