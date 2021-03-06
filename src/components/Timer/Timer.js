import { useSelector } from 'react-redux';
import { Slider } from '@material-ui/core';
import { trackerSelectors } from '../../redux/tracker';
import styles from './Timer.module.css';

export default function Timer({ trackerId }) {
  const { stop, current, percentages } = useSelector(state =>
    trackerSelectors.getCurrentFormatTimeById(state, trackerId)
  );
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      width: '90%',
      fontSize: '13px',
      fontWeight: '700',
      margin: '25px 25px 0 0',
    }}>
      <span className={styles.span}>0</span>
      <Slider defaultValue={current} aria-label="default" valueLabelDisplay="on" disabled />
      <span className={styles.span}>{stop}(d)</span>
      <span className={styles.spanAbs}>{percentages}%</span>
    </div>
  );
}
