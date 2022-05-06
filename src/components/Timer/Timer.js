import { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import styles from './Timer.module.css';
import { habitsStore, getCurrentFormatTimeById } from '../../store';

export default function Timer({ trackerId }) {
  const [state, setState] = useState({ stop: 0, current: 0, percentages: '0' });

  const handleState = (state) => {
    const { stop, current, percentages } = getCurrentFormatTimeById(state, trackerId);
    setState({ stop, current, percentages });
  };
  useEffect(() => {
    const { stop, current, percentages } = getCurrentFormatTimeById(habitsStore.state, trackerId);
    setState({ stop, current, percentages });
    habitsStore.subscribe(handleState);
  }, []);

  const { stop, current, percentages } = state;
  //!TODO make custom slider
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
      <Slider defaultValue={current} aria-label="default" valueLabelDisplay="on" disabled />
      <span className={styles.span}>{stop}(d)</span>
      <span className={styles.spanAbs}>{percentages}%</span>
    </div>
  );
}
