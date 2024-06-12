import styles from './ProfilePage.module.css';
import avatare from '../../../public/images/ProfilePage/avatare.jpg';
import { ProfilePageCard } from './components/ProfilePageCard/ProfilePageCard';
import Info from './date.json';
import { Typography } from '@/components';
import { Button, Input } from '@/shared';
import { useState } from 'react';
import { ProfilePageReviewsCard } from './components/ProfilePageReviewsCard/ProfilePageReviewsCard';

export const ProfilePage = () => {
  const userInfo = Info.user;
  const userProfile = Info.profile;
  const userRate = Info.rate;
  const userProject = Info.project;
  const userReviews = Info.reviews;

  const [visibleCards, setVisibleCards] = useState(12);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 20);
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        <div className={styles.info}>
          <img src={avatare} alt='' className={styles.avatare} />
          <div className={styles.wrap}>
            <Typography variant='paragraph20_regular'>{userInfo.login}</Typography>
            <Typography variant='paragraph20_regular'>{userInfo.phone}</Typography>
            <Typography variant='paragraph20_regular'>{userInfo.country}</Typography>
            <Typography variant='paragraph20_regular'>{userInfo.dateReg}</Typography>
            <Typography variant='paragraph20_regular'>{userInfo.Online}</Typography>
          </div>
        </div>
        <div className={styles.desc}>
          <Typography variant='paragraph20_regular'>Имя: {userProfile.name}</Typography>
          <Typography variant='paragraph20_regular'>Профессия: {userProfile.profession}</Typography>
          <Input placeholder='Описание' variant='second'></Input>
        </div>
        <div className={styles.rate}>
          <Button className={styles.btn} variant='conteined'>
            Настройка
          </Button>
          <Typography variant='paragraph20_regular'>Проектов создано: {userRate.count}</Typography>
          <Typography variant='paragraph20_regular'>Рейтинг: {userRate.rating}</Typography>
          <Typography variant='paragraph20_regular'>Ранг: {userRate.rank}</Typography>
        </div>
      </div>
      <Typography variant='title24_regular'>Портфолио</Typography>
      <div className={styles.block}>
        {userProject.slice(0, visibleCards).map((item, index) => (
          <ProfilePageCard key={index} {...item} />
        ))}
      </div>
      {visibleCards < userProject.length && (
        <Typography onClick={showMoreCards} className={styles.more} variant='paragraph20_regular'>
          Показать больше
        </Typography>
      )}
      <Typography className={styles.reviewstext} variant='title24_regular'>
        Отзывы об исполнителе: {userProfile.name}
      </Typography>
      <div className={styles.reviews}>
        {userReviews.map((item) => (
          <ProfilePageReviewsCard
            imageBuyer={item.Buyer.imageBuyer}
            nameBuyer={item.Buyer.nameBuyer}
            desc={item.Buyer.descBuyer}
            imageSeller={item.Seller.imageSeller}
            nameSeller={item.Seller.nameSeller}
            offer={item.Seller.imageOffer}
          />
        ))}
      </div>
    </div>
  );
};
