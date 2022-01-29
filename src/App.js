import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { trackerOperations } from './redux/tracker';
import Layout from './components/Layout/Layout';
import TrackerList from './components/TrackerList/TrackerList';
import CreateTracker from './components/CreateTracker/CreateTracker';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackerOperations.setCurrentDate());
  }, [dispatch]);
  return (
    <Layout>
      <h1>Habits</h1>
      <CreateTracker />
      <TrackerList />
    </Layout>
  );
}
