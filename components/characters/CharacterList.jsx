import Character from './Character';
import playbookData from '../../data/playbooks.json';

const CharacterList = () => {
  return (
    <div>
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
