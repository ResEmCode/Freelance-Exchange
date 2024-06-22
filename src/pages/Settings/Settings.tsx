import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { General, Profile, Finance, SettingsCategory } from './components';

import styles from './Settings.module.css';

import info from '../ProfilePage/date.json';

export const Settings = () => {
  const [indexPage, setIndexPage] = useState(0);

  const { category } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (category === 'general') {
      setIndexPage(0);
    } else if (category === 'profile') {
      setIndexPage(1);
    } else if (category === 'finance') {
      setIndexPage(2);
    } else {
      navigate('/settings/general');
    }
  }, [category]);

  return (
    <div className='container'>
      <SettingsCategory indexPage={indexPage} />
      <p className={styles.link}>
        Адрес вашего профиля: https://freelance-exchange.com/{info.user.login}
      </p>
      {indexPage === 0 && <General />}
      {indexPage === 1 && <Profile />}
      {indexPage === 2 && <Finance />}
    </div>
  );
};
