import { createSelector } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const getTrackers = state => state.trackers;
const getCurrentDate = state => state.currentDate;

const getCurrentFormatTimeById = createSelector(
  [getTrackers, getCurrentDate, (state, trackerId) => trackerId],
  (trackers, currentDate, trackerId) => {
    const tracker = trackers.find(tracker => tracker.id === trackerId);
    const current = Math.round((dayjs().valueOf() - tracker.start) / 1000 / 60 / 60 / 24);
    const stop = Math.round((tracker.stop - tracker.start) / 1000 / 60 / 60 / 24);
    const percentages = (dayjs().valueOf() - tracker.start) / (tracker.stop - tracker.start) * 100;

    return { ...tracker, current, stop, percentages: percentages.toFixed(2) };
  }
);

const trackerSelectors = {
  getTrackers,
  getCurrentDate,
  getCurrentFormatTimeById,
};

export default trackerSelectors;
