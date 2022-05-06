import { createAction } from '@reduxjs/toolkit';

const set = createAction('SET_TIMER');
const start = createAction('START_TIMER');
const stop = createAction('STOP_TIMER');
const remove = createAction('REMOVE_TIMER');
const setCurrentDate = createAction('CURRENT_TIME');
const reset = createAction('RESET_TIMER');

const timerActions = {
  set,
  start,
  stop,
  remove,
  setCurrentDate,
  reset,
};

export default timerActions;
