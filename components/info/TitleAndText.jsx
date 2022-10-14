import styles from './TitleAndText.module.scss';

const TitleAndText = ({ title, pdf, children }) => {
  return (
    <li className={styles.TitleAndText}>
      <div>
        <h2>{title}</h2>
        <div>{pdf}</div>
      </div>
      <hr />
      {children}
    </li>
  );
};

export default TitleAndText;
