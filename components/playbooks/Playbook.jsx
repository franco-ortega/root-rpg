import TitleAndText from '../info/TitleAndText';
import styles from './Playbook.module.scss';

const Playbook = ({ character, drives, nature, connections }) => {
  return (
    <TitleAndText title={character}>
      <ul className={styles.Playbook}>
        <li>
          <span data-title>Drives (2)</span>: {drives[0].title},{' '}
          {drives[1].title}, {drives[2].title}, {drives[3].title}
        </li>
        <li>
          <span data-title>Nature (1)</span>:{' '}
          <span data-nature='nature-1'>
            {nature[0].title}
            <span data-hidden='hidden-1'>{nature[0].text}</span>
          </span>
          or
          <span data-nature='nature-2'>
            {nature[1].title}{' '}
            <span data-hidden='hidden-2'>{nature[1].text}</span>
          </span>
        </li>
        <li>
          <span data-title>Connections</span>: {connections[0].title} and{' '}
          {connections[1].title}
        </li>
      </ul>
    </TitleAndText>
  );
};

export default Playbook;
