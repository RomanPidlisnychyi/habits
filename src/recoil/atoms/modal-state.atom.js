import { atom } from 'recoil';

export const initModal = {
  isActive: false,
  habitId: null,
};

export const modalState = atom({
  key: 'modalState',
  default: initModal,
});
