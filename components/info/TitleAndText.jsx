import styles from './TitleAndText.module.scss';

const TitleAndText = ({ title, pdf, children }) => {
  return (
    <li className={styles.TitleAndText}>
      <div>
        <h2>{title}</h2>
        {pdf && (
          <a href={pdf} rel='noreferrer' target='_blank'>
            PDF
          </a>
        )}
      </div>
      <hr />
      {children}
    </li>
  );
};

export default TitleAndText;
