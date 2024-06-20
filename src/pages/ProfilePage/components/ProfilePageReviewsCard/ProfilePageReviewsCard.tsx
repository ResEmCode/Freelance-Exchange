import styles from './ProfilePageReviewsCard.module.css';

interface ProfilePageReviewsCardProps {
  imageSeller: string;
  imageBuyer: string;
  nameSeller: string;
  nameBuyer: string;
  desc: string;
  offer: string;
}

export const ProfilePageReviewsCard = ({
  imageSeller,
  imageBuyer,
  nameSeller,
  nameBuyer,
  desc,
  offer
}: ProfilePageReviewsCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.seller}>
          <img src={imageSeller} alt='' className={styles.img} />
          <div className={styles.inner}>
            <p className={styles.name}>{nameSeller}</p>
          </div>
        </div>
        <div className={styles.buyer}>
          <img src={imageBuyer} alt='' className={styles.img} />
          <div className={styles.inner}>
            <p className={styles.name}>{nameBuyer}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
      </div>
      <div className={styles.offer}>
        <img src={offer} alt='' className={styles.imgOffer} />
      </div>
    </div>
  );
};
