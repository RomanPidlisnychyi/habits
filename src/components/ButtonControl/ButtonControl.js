import { useEffect, useState } from 'react';
import styles from './ButtonControl.module.css';
import { getModal, habitsStore } from '../../store';

export default function ButtonControl({ tracker }) {
  const { id } = tracker;
  // const [isShowModal, setIsShowModal] = useState(false);
  // //!TODO make with 2 callbacks
  // //!TODO modal yes/no
  // const [state, setState] = useState(habitsStore.state.modal);
  // const handleState = (state) => {
  //   const modal = getModal(state);
  //   setState(modal);
  // };
  // useEffect(() => {
  //   habitsStore.subscribe(handleState);
  // }, []);

  const handleRemove = () => {
    // setIsShowModal(true);
    // habitsStore.removeTracker(id)
    habitsStore.setModel({ habitId: id, isActive: true });
  };
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.remove} onClick={handleRemove} />
    </div>
  );
}
