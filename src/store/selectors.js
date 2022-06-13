import dayjs from 'dayjs';

export const getHabits = (state) => state.habits;
export const getCurrentDate = (state) => state.currentTimestamp;
export const getModal = (state) => state.modal;

export const getHabitByName = (state, name) => {
  const habits = getHabits(state);
  return habits.find((habit) => habit.name === name);
};

export const getCurrentFormatTimeById = (state, habitId) => {
  const habits = getHabits(state);
  const habit = habits.find((habit) => habit.id === habitId);
  const current = Math.round((dayjs().valueOf() - habit.start) / 1000 / 60 / 60 / 24);
  const endValue = habits.failureAt || habits.finishedAt;
  if (endValue) {
  }
  const stop = Math.round((habit.stop - habit.start) / 1000 / 60 / 60 / 24);
  const percentages = ((dayjs().valueOf() - habit.start) / (habit.stop - habit.start)) * 100;

  return { ...habit, current, stop, percentages: percentages.toFixed(2) };
};
