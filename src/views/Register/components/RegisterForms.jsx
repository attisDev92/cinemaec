import { useState } from 'react'
import styles from '../Register.module.css'
import { Tab, Tabs, Box } from '@mui/material'
import CustomTabPanel from './CustomTabPanel'

const forms = [
  {
    title: 'Registro de Espacios',
    src: 'https://airtable.com/embed/appZZjwb65xhz79Md/pagaplOMJkLFFJLWy/form',
  },
  {
    title: 'Registro de Usuarios',
    src: 'https://airtable.com/embed/appZZjwb65xhz79Md/pagmjDZLJguuWLhXf/form',
  },
]

const RegisterForms = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={styles.forms__container}>
      <h2>Formulario de Registro</h2>
      <p>
        Para continuar el registro llena la información
        solicitada y adjunta los documentos. Nuestro
        personal se contactará una vez se revise la
        información proporcionada para completar el
        registro.
      </p>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tabs
            value={value}
            aria-label="wrapped label tabs example"
            onChange={handleChange}
          >
            {forms.map((item, i) => (
              <Tab value={i} label={item.title} wrapped />
            ))}
          </Tabs>
        </Box>
        {forms.map((item, i) => (
          <CustomTabPanel value={value} index={i}>
            <iframe
              className={`airtable-embed ${styles.forms}`}
              src={item.src}
              frameborder="0"
              onmousewheel=""
            ></iframe>
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  )
}

export default RegisterForms
