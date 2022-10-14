import styles from './TitleAndText.module.scss';

const TitleAndText = ({ title, pdf, children }) => {
  return (
    <li className={styles.TitleAndText}>
      <div>
        <h2>{title}</h2>
        <div>
          {pdf && (
            <a href={pdf} rel='noreferrer' target='_blank'>
              PDF
            </a>
          )}
        </div>
      </div>
      <hr />
      {children}
    </li>
  );
};

export default TitleAndText;
