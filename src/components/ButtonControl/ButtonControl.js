import { useRecoilState } from 'recoil';
import styles from './ButtonControl.module.css';
import { modalState } from '../../recoil';

export default function ButtonControl({ tracker: { id } }) {
  const [modal, setModal] = useRecoilState(modalState);

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
    console.log('Hello');
    setModal({ habitId: id, isActive: true });
    // habitsStore.setModel({ habitId: id, isActive: true });
  };
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.remove} onClick={handleRemove} />
    </div>
  );
}
