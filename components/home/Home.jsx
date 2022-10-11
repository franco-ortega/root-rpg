import Image from 'next/image';
import TitleAndText from '../info/TitleAndText';
import FoxImg from '../../public/images/woodland-fox.png';
import OtterImg from '../../public/images/woodland-otter.png';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div>
        <Image src={FoxImg} alt='' />
        <div>
          <h1>Root RPG</h1>
          <p>Some terms to help you find your footing.</p>
        </div>
        <Image src={OtterImg} alt='' />
      </div>
      <p>Some terms to help you find your footing.</p>
      <ul>
        <TitleAndText>
          <span data-term>Drives</span> - These are the motivations for a
          vagabond. Each vagabond selects 2 drives from their playbook. When a
          drive is completed, the vagabond gains an advancement. A vagabond can
          advance with each drive once per session.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Nature</span> - This is the core of a vagabond&apos;s
          being (for better or worse). A vagabond can try to follow their nature
          or to avoid it, but whenever they give in to their nature, they become
          reenergized.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Moves</span> - These are the vagabond actions. A move
          is made when there is reasonable uncertainty about the success of an
          action. For example, a bird can fly into a tree without making a move,
          but if it is flying into a tree to escape danger or chase someone,
          then a move is required.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Playbook</span> - This is the vagabond character
          sheet. It determines the background / class / species / relationships
          (friends, foes, factions, etc) of a vagabond.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Harm</span> - This is damage, and there are three
          kinds of harm that directly affect vagabonds.{' '}
          <span data-option>Depletion</span> reduces access to the misc minor
          items that are usually on hand (rations, rope, torches, etc).{' '}
          <span data-option>Exhaustion</span> reduces access to actions that
          take a notable amount of effort. <span data-option>Injury</span>{' '}
          reduces access to being alive. Each vagabond starts with 4 hit points
          in each harm track. When the vagabond advances, one option is to add 1
          hit point to one harm track (max 6).
          <br />
          <br />
          <span data-option>Wear</span> is a separate type of damage that
          applies to major items (weapons, armor, etc). Each point of wear
          increases the cost of an item by 1 value.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Value</span> - This is how wealth is determined. Each
          vagabond starts with 6 - 11 value based on their playbook. Value is
          spent to select starting items, and the remainder can be used during
          the game.
        </TitleAndText>
      </ul>
    </div>
  );
};

export default Home;
