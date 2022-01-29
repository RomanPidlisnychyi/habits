import { trackerActions } from '.';

const setCurrentDate = () => dispatch => {
  setInterval(() => {
    dispatch(trackerActions.setCurrentDate(Date.now()));
  }, 1000);
};

const timerOperations = {
  setCurrentDate,
};

export default timerOperations;
