import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import Layout from './components/Layout/Layout';
import TrackerList from './components/TrackerList/TrackerList';
import CreateTracker from './components/CreateTracker/CreateTracker';
import Modal from './components/Modal/Modal';
import { currentDateState } from './recoil';

export default function App() {
  const [_, setCurrentDateState] = useRecoilState(currentDateState);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateState(dayjs().valueOf());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Layout>
      <Modal />
      <h1>Habits</h1>
      <CreateTracker />
      <TrackerList />
    </Layout>
  );
}
