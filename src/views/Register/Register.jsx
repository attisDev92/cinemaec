import Section from '../../components/Section'
import RegisterForms from './components/RegisterForms'
import styles from './Register.module.css'
import { useState } from 'react'
import { requirements } from '../../db/requirements'
import { Tab, Tabs, Box } from '@mui/material'
import CustomTabPanel from './components/CustomTabPanel'

const Register = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Section id="register">
      <div className={styles.Register}>
        <h2>Sé parte de la REA</h2>
        <p>
          La REA está abierta a personas naturales y
          jurídicas que dispongan de auditorios, salas de
          proyección y otros espacios, tanto convencionales
          como no convencionales. Pueden ser administrados
          por entidades públicas, universidades, comunidades
          y organizaciones sociales que deseen
          voluntariamente unirse a la Red, integrando lo
          público, lo privado y lo asociativo.
        </p>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {requirements.map((item, i) => (
                <Tab value={i} label={item.title} wrapped />
              ))}
            </Tabs>
          </Box>
          {requirements.map((item, i) => (
            <CustomTabPanel value={value} index={i}>
              {item.text}
            </CustomTabPanel>
          ))}
        </Box>
      </div>
      <RegisterForms />
    </Section>
  )
}

export default Register
