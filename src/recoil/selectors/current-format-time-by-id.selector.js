import { selectorFamily } from 'recoil';
import { habitsState, currentDateState } from '../atoms';

export const currentFormatTimeByIdState = selectorFamily({
  key: 'currentFormatTimeByIdState', // unique ID (with respect to other atoms/selectors)
  get:
    (id) =>
    ({ get }) => {
      const habits = get(habitsState);
      const habit = habits?.find((habit) => habit.id === id);
      const currentDate = get(currentDateState);
      const current = Math.round((currentDate - habit.start) / 1000 / 60 / 60 / 24);
      const endValue = habits.failureAt || habits.finishedAt;
      if (endValue) {
      }
      const stop = Math.round((habit.stop - habit.start) / 1000 / 60 / 60 / 24);
      const percentages = ((currentDate - habit.start) / (habit.stop - habit.start)) * 100;

      return { ...habit, current, stop, percentages: percentages.toFixed(2) };
    },
});
