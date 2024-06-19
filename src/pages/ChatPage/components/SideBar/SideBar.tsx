import { Search } from '@/shared';
import styles from './SideBar.module.css';
import data from '../../data.json';
import { UserCard } from '../UserCard/UserCard';

export const SideBar = () => {
  const users = data.users;

  return (
    <div className={styles.inner}>
      <div className={styles.search}>
        <Search />
      </div>
      <ul className={styles.list}>
        {users.map((user) => (
          <UserCard key={user.title} {...user} />
        ))}
        {/* <li className={styles.user}>
            <img
              className={styles.img}
              src=''
              alt=''
            />
            <div>
              <Typography tag='h3' variant='title20_medium'>
                User-69
              </Typography>
              <span className={styles.text}>Да, так сойдёт, спасибо за работу</span>
            </div>
            <div className={styles.buttons}>
              <button><img className={styles.star} src={StarSvg} alt="" /></button>
              <button><img className={styles.tick} src={TickSvg} alt="" /></button>
            </div>
          </li> */}
      </ul>
    </div>
  );
};
