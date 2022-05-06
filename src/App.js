import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import TrackerList from './components/TrackerList/TrackerList';
import CreateTracker from './components/CreateTracker/CreateTracker';
import { habitsStore } from './store';

export default function App() {
  useEffect(() => {
    habitsStore.setCurrentDate();
  }, []);
  return (
    <Layout>
      <h1>Habits</h1>
      <CreateTracker />
      <TrackerList />
    </Layout>
  );
}
