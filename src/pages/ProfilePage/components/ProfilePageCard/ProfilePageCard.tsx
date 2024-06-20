import styles from './ProfilePageCard.module.css';

interface ProfilePageCardProps {
  image: string;
  title: string;
  price: string;
}

export const ProfilePageCard = ({ image, title, price }: ProfilePageCardProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt='project' className={styles.img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};
