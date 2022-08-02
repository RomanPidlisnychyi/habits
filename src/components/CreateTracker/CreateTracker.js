import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from './CreateTracker.module.css';
import { habitsState, createHabit } from '../../recoil';

export default function CreateTracker() {
  const [habits, setHabits] = useRecoilState(habitsState);
  const [name, setName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const handlerSetName = ({ target: { value } }) => {
    const isUniqueHabitName = habits.some((habit) => habit.name === value);
    setIsNameValid(!isUniqueHabitName);
    setName(value);
  };

  const handlerSetNumberOfDays = ({ target: { value } }) => {
    let intValue = parseInt(value);
    if (intValue || value === '') {
      if (intValue && intValue < 0) {
        intValue = -intValue;
      }
      setNumberOfDays(`${intValue}`);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const habit = createHabit({ name, numberOfDays });
    setHabits((habits) => {
      const newState = [habit, ...habits];
      localStorage.setItem('habits', JSON.stringify(newState));
      return newState;
    });
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
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <label className={styles.label}>
          <input
            className={inputClassName}
            type="text"
            placeholder="Enter habit name"
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
      {!isNameValid && <span className={styles.message}>This name already exist in the list</span>}
    </div>
  );
}
