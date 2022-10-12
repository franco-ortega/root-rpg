import TitleAndText from '../info/TitleAndText';
import Image from 'next/image';
import TravelImg from '../../public/images/root-travel.jpg';
import styles from './Moves.module.scss';

const Moves = () => {
  return (
    <div className={styles.Moves}>
      <h1>Moves</h1>
      <p>This is how a vagabond gets shit done.</p>
      <div>
        <Image src={TravelImg} alt='' />
      </div>
      <ul>
        <TitleAndText>
          <span data-term>Basic moves</span> cover most interations with most
          people (NPCs and PCs), general items, and the immediate environment.
          There are 8 basic moves that everyone can use:{' '}
          <span data-option>attempt a roguish feat</span>,{' '}
          <span data-option>figure someone out</span>,{' '}
          <span data-option>persuade an NPC</span>,{' '}
          <span data-option>read a tense situation</span>,{' '}
          <span data-option>trick an NPC</span>,{' '}
          <span data-option>trust fate</span>,{' '}
          <span data-option>wreck something</span>,{' '}
          <span data-option>help or interfere</span>, However, the{' '}
          <span data-option>attempt a roguish feat</span> move includes a
          selection of 9 options (<span data-option>Acrobatics</span>,{' '}
          <span data-option>Blindside</span>,{' '}
          <span data-option>Counterfeit</span>,{' '}
          <span data-option>Disable Device</span>, <span data-option>Hide</span>
          , <span data-option>Pick Locks</span>,{' '}
          <span data-option>Pickpocket</span>,{' '}
          <span data-option>Sleight of Hand</span>,{' '}
          <span data-option>Sneak</span>), and each vagabond will start the game
          with 1 - 4 of these options. Also, each playbook comes with set of 6
          unique moves, and each vagabond will begin with 3 of these.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Weapon moves</span> are divided into{' '}
          <span data-option>basic weapon moves</span> and{' '}
          <span data-option>weapon skill moves</span>. All vagabonds have access
          to all the <span data-option>basic weapon moves</span> (
          <span data-option>engage in melee</span>,{' '}
          <span data-option>grapple an enemy</span>,{' '}
          <span data-option>target someone</span>). To use a particular{' '}
          <span data-option>weapon skill move</span>, the vagabond must have the
          skill, must have a weapon that can benefit from the skill, and must be
          in a situation where the skill can be applied (i.e. you cannot disarm
          someone who does not have a weapon). Each vagabond starts with one{' '}
          <span data-option>weapon skill move</span> based on their playbook.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Reputation moves</span> can come into play when you
          meet or interact with a notable faction member or Woodland citizen.
          Each vagabond will begin with a reputation score of 0 with all
          factions, but they will also have at least two points of prestige
          (positive) and one point of notoriety (negative) that can be applied
          to any faction. Every 5 prestige points or 3 notoriety points with a
          faction will respectively increase or decrease the reputation score
          with that faction.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Travel moves</span> are used to journey across the
          Woodland. Vagabonds may travel along a path or through the forest. A
          path provides a less arduous journey, but the forest can provide
          resources. Vagabonds must set a pace for their travel. Move slowly to
          gain benefits with an increased risk of danger, or move quickly to
          perhaps avoid danger but suffer exhaustion, or move at an average pace
          for a bit of both.
        </TitleAndText>
        <TitleAndText>
          <span data-term>Session moves</span> happen once at the end of every
          session. Each player may replace their nature, one drive, or one
          connection to reflect how their vagabond has changed or grown.
        </TitleAndText>
      </ul>
    </div>
  );
};

export default Moves;
