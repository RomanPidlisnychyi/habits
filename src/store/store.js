import { Subject } from 'rxjs';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

const subject = new Subject();

const localState = localStorage.getItem('habits');
const initialHabits = localState ? JSON.parse(localState) : [];
const initialCurrent = dayjs().valueOf();
const initialState = {
  habits: initialHabits,
  currentTimestamp: initialCurrent,
  isInit: false,
};

let state = initialState;

const setCurrentDate = () => {
  if (!state.isInit) {
    setInterval(() => {
      state = { ...state, currentTimestamp: dayjs().valueOf(), isInit: true };
      subject.next(state);
    }, 1000);
    // console.log('Hello');
    // interval(1000).pipe(
    //   takeUntil((res) => {
    //     console.log('res', res);
    //     const updatedState = { ...state, currentTimestamp: dayjs().valueOf(), isInit: true };
    //     subject.next(updatedState);
    //     return res;
    //   }),
    // );
  }
};

// map((res) => {
//   console.log('res', res);
//   const updatedState = { ...state, currentTimestamp: dayjs().valueOf(), isInit: true };
//   subject.next(updatedState);
//   return res;
// }),

const setTracker = ({ name, numberOfDays }) => {
  const start = dayjs();
  const stop = start.add(numberOfDays, 'days');

  const tracker = {
    name,
    id: uuidv4(),
    start: start.valueOf(),
    stop: stop.valueOf(),
    failureAt: null,
    archive: [],
  };

  const habits = [tracker, ...state.habits];

  localStorage.setItem('habits', JSON.stringify(habits));
  state = { ...state, habits };
  subject.next(state);
};

const startTracker = (state, { payload: trackerId }) => {
  const newState = state.map((tracker) => {
    if (tracker.id === trackerId) {
      const timeTracked = tracker.stop - tracker.start;
      tracker = { ...tracker, start: dayjs().get('milliseconds') - timeTracked, stop: null };
    }
    return tracker;
  });

  localStorage.setItem('habits', JSON.stringify(newState));

  return newState;
};

const stopTracker = (state, { payload: trackerId }) => {
  const newState = state.map((tracker) => {
    if (tracker.id === trackerId) {
      tracker = { ...tracker, stop: dayjs().get('milliseconds') };
    }
    return tracker;
  });

  localStorage.setItem('habits', JSON.stringify(newState));

  return newState;
};

const removeTracker = (trackerId) => {
  const habits = state.habits.filter((tracker) => tracker.id !== trackerId);

  habits.length > 0
    ? localStorage.setItem('habits', JSON.stringify(habits))
    : localStorage.removeItem('habits');
  state = { ...state, habits };
  subject.next(state);
};

const resetTracker = (state, { payload: trackerId }) => {
  const newState = state.map((tracker) => {
    if (tracker.id === trackerId) {
      const currentTimestamp = dayjs().valueOf();
      const habitRange = tracker.stop - tracker.start;
      const stop = currentTimestamp + habitRange;
      return {
        ...tracker,
        id: uuidv4(),
        start: currentTimestamp,
        stop,
        archive: [{ ...tracker, failureAt: currentTimestamp }, ...tracker.archive],
      };
    }
    return tracker;
  });

  localStorage.setItem('habits', JSON.stringify(newState));

  return newState;
};

export const habitsStore = {
  init: () => {
    subject.next(state);
  },
  subscribe: (setState) => subject.subscribe(setState),
  setCurrentDate,
  setTracker,
  startTracker,
  stopTracker,
  removeTracker,
  resetTracker,
  initialState,
  state,
};
