import { useState } from 'react';
import styles from './CreateTracker.module.css';
import { habitsStore, getHabitByName } from '../../store';

export default function CreateTracker() {
  const [name, setName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);

  const handlerSetName = (e) => {
    const name = e.target.value;
    const habit = getHabitByName(habitsStore.state, name);
    setIsNameValid(!!!habit);
    setName(e.target.value);
  };

  const handlerSetNumberOfDays = (e) => {
    let intValue = parseInt(e.target.value);
    if (intValue || e.target.value === '') {
      if (intValue && intValue < 0) {
        intValue = -intValue;
      }
      setNumberOfDays(`${intValue}`);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    habitsStore.setTracker({ name, numberOfDays });
    setName('');
    setNumberOfDays('');
  };

  let inputClassName = styles.input;
  if (name) {
    if (!isNameValid) {
      inputClassName = styles.existingName;
    }
  } else {
    inputClassName = `${styles.input} ${styles.invalid}`;
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <label className={styles.label}>
        <input
          className={inputClassName}
          type="text"
          placeholder="Enter habit name"
          data-name={'Привіт'}
          value={name}
          onChange={handlerSetName}
        />
      </label>
      <label className={styles.labelDay}>
        <input
          className={numberOfDays ? styles.inputDay : `${styles.inputDay} ${styles.invalid}`}
          type="text"
          placeholder="How days do you need?"
          value={numberOfDays}
          onChange={handlerSetNumberOfDays}
        />
      </label>
      <button
        className={styles.button}
        type="submit"
        disabled={!name || !numberOfDays || !isNameValid}
      />
    </form>
  );
}
