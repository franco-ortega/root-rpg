import styles from './Video.module.scss';

const Video = ({ url, title, time, text }) => {
  return (
    <li className={styles.Video}>
      <a href={url} target='_blank' rel='noreferrer'>
        {title}
      </a>{' '}
      ({time}) - {text}
    </li>
  );
};

export default Video;
