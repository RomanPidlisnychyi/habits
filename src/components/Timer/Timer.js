import { useSelector } from 'react-redux';
import { trackerSelectors } from '../../redux/tracker';
import styles from './Timer.module.css';

export default function Timer({ trackerId }) {
  const { stop, current } = useSelector(state =>
    trackerSelectors.getCurrentFormatTimeById(state, trackerId)
  );
//!TODO make some line with start current stop values;
  return (
    <div className={styles.span}>
      start: 0 current:{current} stop:{stop}
    </div>
  );
}
