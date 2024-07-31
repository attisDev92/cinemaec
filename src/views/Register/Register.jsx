import Section from '../../components/Section'
import RegisterForms from './components/RegisterForms'
import styles from './Register.module.css'
import { Tabs } from 'antd'
import { useEffect, useState } from 'react'

const requirements = [
  {
    type: 'Personas Jurídicas - Espacios',
    requirementsDetails: [
      'Registro mediante formulario en línea (formato expedido por el IFCI).',
      'Tres fotografías del espacio: pantalla o monitor, butacas y vista general.',
      'Imagen del logo, nombre comercial o marca.',
      'Documento de autorización que acredite al registrante como director/administrador/coordinador/presidente o propietario del espacio.',
      'Registro Único de Contribuyentes (RUC) vigente.',
      'Documento que constate la ubicación exacta del espacio (planilla de servicio básico, pago de impuesto predial, contrato de arrendamiento, convenio de uso, comodato, título de propiedad, etc.).',
      'Copia del nombramiento del representante legal debidamente legalizado.',
    ],
  },
  {
    type: 'Personas Jurídicas – Gestores',
    requirementsDetails: [
      'Registro mediante formulario en línea (formato expedido por el IFCI).',
      'Imagen del logo, nombre comercial o marca.',
      'Registro Único de Contribuyentes (RUC) vigente.',
      'Copia del nombramiento del representante legal debidamente legalizado.',
    ],
  },
  {
    type: 'Personas Naturales – Espacios',
    requirementsDetails: [
      'Registro mediante formulario en línea (formato IFCI).',
      'Tres fotografías del espacio: pantalla o monitor, butacas y vista general.',
      'Documento de autorización que acredite al registrante como director/administrador/coordinador/presidente o propietario del espacio.',
      'Documento que constate la ubicación exacta del espacio (planilla de servicio básico, pago de impuesto predial, contrato de arrendamiento, convenio de uso, comodato, título de propiedad, etc.).',
    ],
  },
  {
    type: 'Personas Naturales – Gestores',
    requirementsDetails: [
      'Registro mediante formulario en línea (formato IFCI).',
      'Una fotografía del gestor cultural solicitante.',
      'Certificado del RUAC (opcional).',
    ],
  },
]

const Register = () => {
  const [orientationTab, setOrientationTab] =
    useState('left')

  useEffect(() => {
    const handleResize = () => {
      const displayWidth = window.innerWidth
      if (displayWidth > 770) {
        setOrientationTab('left')
      } else {
        setOrientationTab('top')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

        <Tabs
          className={styles.requirements}
          tabPosition={orientationTab}
          items={requirements.map((requirement, i) => {
            const id = String(i + 1)
            return {
              label: requirement.type,
              key: id,
              children: (
                <ol>
                  {requirement.requirementsDetails.map(
                    (detail, index) => (
                      <li key={index}>{detail}</li>
                    ),
                  )}
                </ol>
              ),
            }
          })}
        />
      </div>
      <RegisterForms />
    </Section>
  )
}

export default Register
