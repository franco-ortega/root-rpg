import Character from './Character';
import playbookData from '../../data/playbooks.json';
import styles from './CharacterList.module.scss'

const CharacterList = () => {
  return (
    <div className={styles.CharacterList}>
      <h1>Characters</h1>
      <ul>
        {playbookData.map((playbook, i) => (
          <Character
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

export default CharacterList;
