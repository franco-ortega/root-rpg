import TitleAndText from '../info/TitleAndText';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <h1>Root RPG</h1>
      <p>These are some terms to help you find your footing.</p>
      <ul>
        <TitleAndText>
          <span data-term>Drives</span> - These are the motivations for your
          vagabond. Each vagabond selects 2 drives from their playbook. When you
          complete a drive, you gain an advancement. You can advance with each
          drive once per session. There may be sessions where none of your
          drives are completed.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Nature</span> - This is the core of your being (for
          better or worse). You can try to follow your nature or to avoid it,
          but whenever you give in to your nature, you become reenergized.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Moves</span> - These are your actions. You make a move
          any time there is reasonable uncertainty about the success of an
          effort. For example, a bird can fly into a tree without making a move,
          but if it is flying into a tree to escape danger or chase someone,
          then a move is required.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Playbook</span> - This is your background / class /
          species / relationships (friends, foes, factions, etc) all rolled into
          a single character sheet.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Harm</span> - This is damage, and there are three (or
          really four) kinds of damage. <span data-option>Depletion</span>{' '}
          reduces access to the misc minor items that you usually have on hand
          (rations, rope, torches, etc). <span data-option>Exhaustion</span>{' '}
          reduces access to actions that take a notable amount of effort.{' '}
          <span data-option>Injury</span> reduces access to being alive.{' '}
          <span data-option>Wear</span> reduces access to major items (weapons,
          armor, etc).
        </TitleAndText>
      </ul>
    </div>
  );
};

export default Home;
