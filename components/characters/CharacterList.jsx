import Character from './Character';
import playbookData from '../../data/playbooks.json';

const CharacterList = () => {
  return (
    <div>
      <h1>Characters</h1>
      <Character
        character={playbookData[0].character}
        drives={playbookData[0].drives}
        nature={playbookData[0].nature}
        connections={playbookData[0].connections}
      />
    </div>
  );
};

export default CharacterList;
