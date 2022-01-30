import { useDispatch } from 'react-redux';
import { trackerActions } from '../../redux/tracker';
import styles from './ButtonControl.module.css';

export default function ButtonControl({ tracker }) {
  const { id } = tracker;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.remove}
        onClick={() => dispatch(trackerActions.remove(id))}
      />
    </div>
  );
}
