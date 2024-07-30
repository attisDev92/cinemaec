import { Input } from 'antd'
import { useField } from '../hooks'
import styles from './Contact.module.css'
import Section from './Section'

const Contact = () => {
  const name = useField('text')
  const lastName = useField('text')
  const organization = useField('text')
  const message = useField('textarea')

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className={styles.Contact}>
      <Section id="contact">
        <div className={styles.contact__container}>
          <form
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <label>Nombre:</label>
            <Input type={name.type} />

            <label>Apellido:</label>
            <Input type={lastName.type} />

            <label>Organización:</label>
            <Input type={organization.type} />

            <label>Mensaje:</label>
            <Input type={message.type} />

            <button type="submit">Enviar</button>
          </form>

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
