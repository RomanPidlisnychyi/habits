import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { trackerActions } from '../../redux/tracker';
import styles from './CreateTracker.module.css';

export default function CreateTracker() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [isInvalidDayInput, setIsInvalidDayInput] = useState(false);

  const handlerSubmit = e => {
    e.preventDefault();

    if(!(parseInt(numberOfDays) + 1)) {
      setIsInvalidDayInput(true);
      return;
    }

    dispatch(trackerActions.set({ name, numberOfDays }));
    setName('');
    setNumberOfDays('');
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter habit name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={styles.labelDay}>
          <input
            className={isInvalidDayInput ? `${styles.inputDay} ${styles.invalid}` : styles.inputDay}
            type="text"
            placeholder="How days do you need?"
            value={numberOfDays}
            onChange={e => {
              if(isInvalidDayInput) {
                setIsInvalidDayInput(false);
              }
              setNumberOfDays(e.target.value);
            }}
          />
        </label>
      <button className={styles.button} type="submit" disabled={!name} />
    </form>
  );
}
