import { useRecoilState } from 'recoil';
import TrackerItem from '../TrackerItem/TrackerItem';
import styles from './TrackerList.module.css';
import { habitsState } from '../../recoil';

export default function TrackerList() {
  const [habits] = useRecoilState(habitsState);

  return (
    <div className={styles.listContainer}>
      {habits?.length > 0 ? (
        <ul className={styles.list}>
          {habits.map((habit) => (
            <TrackerItem key={habit.id} tracker={habit} />
          ))}
        </ul>
      ) : (
        <p className={styles.text}>Create new habit tracker now</p>
      )}
    </div>
  );
}
