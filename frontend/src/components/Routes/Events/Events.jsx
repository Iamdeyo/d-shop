import styles from '../../../styles/styles.js';
import EventsCard from './EventsCard.jsx';
const Events = () => {
  return (
    <section className={styles.section}>
      <p className={styles.heading}>Popular Events</p>
      <div className="bg-[#f0efef]">
        <EventsCard />
      </div>
    </section>
  );
};
export default Events;
