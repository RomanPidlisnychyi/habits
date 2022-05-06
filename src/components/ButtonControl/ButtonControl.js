import styles from './ButtonControl.module.css';
import { habitsStore } from '../../store';

export default function ButtonControl({ tracker }) {
  const { id } = tracker;
  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.remove}
        onClick={() => habitsStore.removeTracker(id)}
      />
    </div>
  );
}
