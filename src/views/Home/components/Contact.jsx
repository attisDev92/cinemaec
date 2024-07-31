import styles from './Contact.module.css'
import Section from '../../../components/Section'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Section id="contact">
        <div className={styles.contact__container}>
          <ContactForm />

          <div className={styles.info__container}>
            <ul>
              <li>
                Dirección: <br />
                <a
                  href="https://maps.app.goo.gl/WRSKKHGnx3HxgfRK9"
                  target="_blank"
                >
                  Av. Atahualpa OE1-109 y Av. 10 de agosto
                </a>
              </li>
              <li>
                Teléfono: <br />
                +593 2-393-1250
              </li>
              <li>
                e-mail: <br />
                <a href="mailto:audiovisuales.ifci@creatividad.gob.ec">
                  audiovisuales.ifci@creatividad.gob.ec
                </a>
              </li>
              <li>
                <a
                  href="https://creatividad.gob.ec"
                  target="_blank"
                >
                  www.creatividad.gob.ec
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
