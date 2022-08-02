import { Slider } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import styles from './Timer.module.css';
import { currentFormatTimeByIdState } from '../../recoil';

export default function Timer({ trackerId }) {
  const { stop, current, percentages } = useRecoilValue(currentFormatTimeByIdState(trackerId));
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        width: '90%',
        fontSize: '13px',
        fontWeight: '700',
        margin: '25px 25px 0 0',
      }}
    >
      <span className={styles.span}>0</span>
      <Slider
        value={current}
        step={1}
        min={0}
        max={stop}
        aria-label="default"
        valueLabelDisplay="on"
        disabled
      />
      <span className={styles.span}>{stop}(d)</span>
      <span className={styles.spanAbs}>{percentages}%</span>
    </div>
  );
}
