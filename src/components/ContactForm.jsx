import { Input } from 'antd'
import { useField } from '../hooks/useField'
import styles from './Contact.module.css'
import { useSubmitForm } from '../hooks/useSubmit'

const ContactForm = () => {
  const name = useField()
  const mail = useField()
  const organization = useField()
  const message = useField()
  const { submit } = useSubmitForm()

  const handleSubmit = async e => {
    e.preventDefault()
    const content = {
      name: name.properties.value,
      mail: mail.properties.value,
      organization: organization.properties.value,
      message: message.properties.value,
    }
    try {
      await submit('contact-template', content)
      name.reset()
      mail.reset()
      organization.reset()
      message.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Nombre y Apellido:</label>
      <Input type="text" {...name.properties} />

      <label>Mail:</label>
      <Input type="text" {...mail.properties} />

      <label>Organización:</label>
      <Input type="text" {...organization.properties} />

      <label>Mensaje:</label>
      <Input type="text" {...message.properties} />

      <button className="button-secondary" type="submit">
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
