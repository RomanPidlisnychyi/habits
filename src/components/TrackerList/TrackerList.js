import { useState, useEffect } from 'react';
import TrackerItem from '../TrackerItem/TrackerItem';
import styles from './TrackerList.module.css';
import { habitsStore, getHabits } from '../../store';

export default function TrackerList() {
  const [trackers, setTrackers] = useState(habitsStore.state.habits);
  const handleState = (state) => {
    const habits = getHabits(state);
    setTrackers(habits);
  };
  useEffect(() => {
    habitsStore.subscribe(handleState);
  }, []);

  return (
    <div className={styles.listContainer}>
      {trackers && trackers.length > 0 ? (
        <ul className={styles.list}>
          {trackers.map((tracker) => (
            <TrackerItem key={tracker.id} tracker={tracker} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Create new habit tracker now</p>
      )}
    </div>
  );
}
