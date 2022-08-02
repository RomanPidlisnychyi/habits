import { atom } from 'recoil';

const localState = localStorage.getItem('habits');
const initialHabits = localState ? JSON.parse(localState) : [];

export const habitsState = atom({
  key: 'habitsState',
  default: initialHabits,
});
