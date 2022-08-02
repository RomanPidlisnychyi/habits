import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

export const createHabit = ({ name, numberOfDays }) => {
  const start = dayjs();
  const stop = start.add(numberOfDays, 'days');

  return {
    name,
    id: uuidv4(),
    start: start.valueOf(),
    stop: stop.valueOf(),
    failureAt: null,
    finishedAt: null,
    archive: [],
  };
};
