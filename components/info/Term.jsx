import styles from './Term.module.scss';

const Term = ({ term, text }) => {
  return (
    <li className={styles.Term}>
      <p>
        <span data-term>{term}</span> {text}
      </p>
    </li>
  );
};

export default Term;
