import styles from './Settings.module.css';

import info from '../ProfilePage/date.json';
import SettingsCategory from './components/SettingsCategory/SettingsCategory';
import { General } from './components/General/General';
import { Profile } from './components/Profile/Profile';
import { Finance } from './components/Finance/Finance';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Settings = () => {
  const { category } = useParams();

  const [indexPage, setIndexPage] = useState(0);

  useEffect(() => {
    if (category === 'general') {
      setIndexPage(0);
    } else if (category === 'profile') {
      setIndexPage(1);
    } else if (category === 'finance') {
      setIndexPage(2);
    } else if (category === '') {
      setIndexPage(0);
    } else {
      setIndexPage(0);
    }
  }, []);

  return (
    <div className='container'>
      <SettingsCategory setIndexPage={setIndexPage} />
      <a href='#!'>
        <p className={styles.link}>
          Адрес вашего профиля: https://freelance-exchange.com/{info.user.login}
        </p>
      </a>
      {indexPage === 0 && <General />}
      {indexPage === 1 && <Profile />}
      {indexPage === 2 && <Finance />}
    </div>
  );
};
