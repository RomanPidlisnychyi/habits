import { atom } from 'recoil';
import dayjs from 'dayjs';

export const currentDateState = atom({
  key: 'currentDateState',
  default: dayjs().valueOf(),
});
