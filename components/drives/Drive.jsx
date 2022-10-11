import TitleAndText from '../info/TitleAndText';

const Drive = ({ title, text }) => {
  return (
    <TitleAndText title={title}>
      <p>{text}</p>
    </TitleAndText>
  );
};

export default Drive;
