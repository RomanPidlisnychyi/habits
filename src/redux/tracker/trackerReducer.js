import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { trackerActions } from '.';

const localState = localStorage.getItem('habits');
const initialCurrent = dayjs().valueOf();
const initialState = localState ? JSON.parse(localState) : [];

const setTracker = (state, { payload }) => {
  const start = dayjs();
  const stop = start.add(payload.numberOfDays, 'days');

  const tracker = {
    name: payload.name,
    id: uuidv4(),
    start: start.valueOf(),
    stop: stop.valueOf(),
  };

  const newState = [tracker, ...state];

  localStorage.setItem('habits', JSON.stringify(newState));

  return newState;
};

const startTracker = (state, { payload: trackerId }) => {
  const newState = state.map(tracker => {
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
  const newState = state.map(tracker => {
    if (tracker.id === trackerId) {
      tracker = { ...tracker, stop: dayjs().get('milliseconds') };
    }
    return tracker;
  });

  localStorage.setItem('habits', JSON.stringify(newState));

  return newState;
};

const removeTracker = (state, { payload: trackerId }) => {
  const newState = state.filter(tracker => tracker.id !== trackerId);

  newState.length > 0
    ? localStorage.setItem('habits', JSON.stringify(newState))
    : localStorage.removeItem('habits');

  return newState;
};

const trackers = createReducer(initialState, {
  [trackerActions.set]: setTracker,
  [trackerActions.start]: startTracker,
  [trackerActions.stop]: stopTracker,
  [trackerActions.remove]: removeTracker,
});

const currentDate = createReducer(initialCurrent, {
  [trackerActions.setCurrentDate]: (_, { payload }) => payload,
});

export default combineReducers({
  trackers,
  currentDate,
});
