import Character from './Character';
import playbookData from '../../data/playbooks.json';

const CharacterList = () => {
  return (
    <div>
      <h1>Characters</h1>
      <Character
        drives={playbookData.adventurer.drives}
        nature={playbookData.adventurer.nature}
        connections={playbookData.adventurer.connections}
      />
    </div>
  );
};

export default CharacterList;
