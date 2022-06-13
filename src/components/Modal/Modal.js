import { useEffect, useState } from 'react';
import { getModal, habitsStore } from '../../store';

export default function Modal() {
  const [state, setState] = useState(habitsStore.state.modal);
  const handleState = (state) => {
    const modal = getModal(state);
    setState(modal);
  };
  useEffect(() => {
    habitsStore.subscribe(handleState);
  }, []);
  const handleClick = (event) => {
    if (event === 'No') {
      return habitsStore.resetModel();
    }
    habitsStore.removeTracker(state.habitId);
    habitsStore.resetModel();
  };

  return state?.isActive ? (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <button type="button" onClick={() => handleClick('Yes')}>
        Yes
      </button>
      <button type="button" onClick={() => handleClick('No')}>
        No
      </button>
    </div>
  ) : null;
}
