import TitleAndText from '../info/TitleAndText';
import styles from './Drive.module.scss';

const Drive = ({ title, text }) => {
  return (
    <TitleAndText title={title}>
      <p className={styles.Drive}>{text}</p>
    </TitleAndText>
  );
};

export default Drive;
