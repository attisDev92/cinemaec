import styles from './Section.module.css'

const Section = props => {
  return (
    <section id={props.id} className={styles.Section}>
      {props.children}
    </section>
  )
}
export default Section
