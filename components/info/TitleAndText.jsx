import styles from './TitleAndText.module.scss';

const TitleAndText = ({ title, children }) => {
  return (
    <li className={styles.TitleAndText}>
      <h2>{title}</h2>
      <hr />
      {children}
    </li>
  );
};

export default TitleAndText;
