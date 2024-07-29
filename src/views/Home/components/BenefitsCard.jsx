import styles from '../Home.module.css'

const BenefitsCard = ({ text, img, alt }) => {
  return (
    <div className={styles.BenefitsCard}>
      <p>{text}</p>
      <div className={styles.img}>
        <img src={img} alt={alt} />
      </div>
    </div>
  )
}

export default BenefitsCard
