import TitleAndText from '../info/TitleAndText';
import styles from './Playbook.module.scss';

const Playbook = ({ character, drives, nature, connections, pdf }) => {
  return (
    <TitleAndText title={character} pdf={pdf}>
      <ul className={styles.Playbook}>
        <li>
          <span data-title>Drives (2)</span>: {drives[0].title},{' '}
          {drives[1].title}, {drives[2].title}, {drives[3].title}
        </li>
        <li>
          <span data-title>Nature (1)</span>:{' '}
          <span data-text='text-1'>
            {nature[0].title}
            <span data-hidden='hidden-1'>{nature[0].text}</span>
          </span>
          or
          <span data-text='text-2'>
            {nature[1].title}
            <span data-hidden='hidden-2'>{nature[1].text}</span>
          </span>
        </li>
        <li>
          <span data-title>Connections</span>:{' '}
          <span data-text='text-1'>
            {connections[0].title}
            <span data-hidden='hidden-1'>
              {connections[0].text} <br />
              <br /> <span data-benefit>{connections[0].benefit}</span>
            </span>
          </span>
          and
          <span data-text='text-2'>
            {connections[1].title}
            <span data-hidden='hidden-2'>
              {connections[1].text} <br />
              <br /> <span data-benefit>{connections[1].benefit}</span>
            </span>
          </span>
        </li>
      </ul>
    </TitleAndText>
  );
};

export default Playbook;
