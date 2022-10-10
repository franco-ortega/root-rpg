import Playbook from '../playbooks/Playbook';
import playbookData from '../../data/playbooks.json';
import styles from './PlaybookList.module.scss';

const PlaybookList = () => {
  return (
    <div className={styles.PlaybookList}>
      <ul>
        {playbookData.map((playbook, i) => (
          <Playbook
            key={i}
            character={playbook.character}
            drives={playbook.drives}
            nature={playbook.nature}
            connections={playbook.connections}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlaybookList;
