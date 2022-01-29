import { useSelector } from 'react-redux';
import { trackerSelectors } from '../../redux/tracker';
import TrackerItem from '../TrackerItem/TrackerItem';
import styles from './TrackerList.module.css';

export default function TrackerList() {
  const trackers = useSelector(trackerSelectors.getTrackers);
  return (
    <div className={styles.listContainer}>
      {trackers && trackers.length > 0 ? (
        <ul className={styles.list}>
          {trackers.map(tracker => (
            <TrackerItem key={tracker.id} tracker={tracker} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Create new habit tracker now</p>
      )}
    </div>
  );
}
