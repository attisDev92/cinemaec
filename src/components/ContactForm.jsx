import { Button, TextField } from '@mui/material'
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
      name: name.value,
      mail: mail.value,
      organization: organization.value,
      message: message.value,
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
      <TextField
        id="name"
        label="Nombre"
        variant="filled"
        {...name.properties}
      />
      <TextField
        id="mail"
        label="Mail"
        variant="filled"
        {...mail.properties}
      />
      <TextField
        id="organization"
        label="Organización"
        variant="filled"
        {...organization.properties}
      />
      <TextField
        id="message"
        label="Mensaje"
        variant="filled"
        {...message.properties}
      />
      <Button variant="outlined" type="submit">
        Enviar
      </Button>
    </form>
  )
}

export default ContactForm
