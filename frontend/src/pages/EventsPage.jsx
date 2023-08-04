import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import EventsCard from '../components/Routes/Events/EventsCard';
import styles from '../styles/styles';

const EventsPage = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div>
          <EventsCard />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default EventsPage;
