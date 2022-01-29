import { useDispatch } from 'react-redux';
import { trackerActions } from '../../redux/tracker';
import styles from './ButtonControl.module.css';

export default function ButtonControl({ tracker }) {
  const { id, stop } = tracker;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrap}>
      {stop ? (
        <button
          type="button"
          className={styles.start}
          onClick={() => dispatch(trackerActions.start(id))}
        />
      ) : (
        <button
          type="button"
          className={styles.pause}
          onClick={() => dispatch(trackerActions.stop(id))}
        />
      )}
      <button
        type="button"
        className={styles.remove}
        onClick={() => dispatch(trackerActions.remove(id))}
      />
    </div>
  );
}
