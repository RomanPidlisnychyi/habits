import { useRecoilState } from 'recoil';
import { habitsState, modalState, initModal } from '../../recoil';

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);
  const [_, setHabits] = useRecoilState(habitsState);

  const handleClick = (event) => {
    if (event === 'No') {
      return setModal(initModal);
    }
    setHabits((habits) => {
      const newState = habits.filter((habit) => habit.id !== modal.habitId);
      localStorage.setItem('habits', JSON.stringify(newState));
      return newState;
    });
    setModal(initModal);
  };

  return modal?.isActive ? (
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
