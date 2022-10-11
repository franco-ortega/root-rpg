import TitleAndText from '../info/TitleAndText';

const Playbook = ({ character, drives, nature, connections }) => {
  return (
    <TitleAndText title={character}>
      <ul>
        <li>
          <span>Drives (2)</span>: {drives[0].title}, {drives[1].title},{' '}
          {drives[2].title}, {drives[3].title}
        </li>
        <li>
          <span>Nature (1)</span>: {nature[0].title}, {nature[1].title}
        </li>
        <li>
          <span>Connections</span>: {connections[0].title},{' '}
          {connections[1].title}
        </li>
      </ul>
    </TitleAndText>
  );
};

export default Playbook;
