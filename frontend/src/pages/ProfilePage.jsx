import { useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ProfileContent from '../components/Profile/ProfileContent.jsx';
import ProfileSideBar from '../components/Profile/ProfileSideBar.jsx';
import styles from '../styles/styles';

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <section className={styles.section + ' !px-0 !mt-0 !mb-0'}>
        <div className="flex overflow-hidden relative min-h-[418px] gap-6">
          <ProfileSideBar active={active} setActive={setActive} />

          <ProfileContent active={active} setActive={setActive} />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ProfilePage;
