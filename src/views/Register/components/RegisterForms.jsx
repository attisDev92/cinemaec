import styles from '../Register.module.css'
import { Tabs } from 'antd'

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
      <Tabs
        tabPosition="top"
        items={forms.map((form, i) => {
          const id = String(i + 1)
          return {
            label: `${form.title}`,
            key: id,
            children: (
              <iframe
                className={`airtable-embed ${styles.forms}`}
                src={form.src}
                frameborder="0"
                onmousewheel=""
              ></iframe>
            ),
          }
        })}
      />
    </div>
  )
}

export default RegisterForms
