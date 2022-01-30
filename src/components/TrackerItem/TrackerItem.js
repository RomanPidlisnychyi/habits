import Timer from '../Timer/Timer';
import ButtonControl from '../ButtonControl/ButtonControl';
import styles from './TrackerItem.module.css';

export default function TrackerItem({ tracker }) {
  const { stop } = tracker;

  const { item, active, wrap, name } = styles;

  return (
    <li className={stop ? item : `${item} ${active}`}>
      <p className={name}>{tracker.name}</p>
      <div className={wrap}>
        <Timer trackerId={tracker.id} />
        <ButtonControl tracker={tracker} />
      </div>
    </li>
  );
}
