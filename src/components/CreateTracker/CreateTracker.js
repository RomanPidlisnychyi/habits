import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { trackerActions } from '../../redux/tracker';
import styles from './CreateTracker.module.css';

export default function CreateTracker() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(trackerActions.set({ name, numberOfDays }));
    setName('');
    setNumberOfDays('');
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
        <label className={styles.label}>
          <input
            className={name ? styles.input : `${styles.input} ${styles.invalid}`}
            type="text"
            placeholder="Enter habit name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={styles.labelDay}>
          <input
            className={numberOfDays ? styles.inputDay : `${styles.inputDay} ${styles.invalid}`}
            type="text"
            placeholder="How days do you need?"
            value={numberOfDays}
            onChange={e => {
              if((parseInt(e.target.value)) || e.target.value === '') {
                setNumberOfDays(e.target.value);
              }
            }}
          />
        </label>
      <button className={styles.button} type="submit" disabled={!name || !numberOfDays } />
    </form>
  );
}
