import Section from '../../../components/Section'
import BenefitsCard from './BenefitsCard'
import { Collapse, Divider } from 'antd'
import styles from '../Home.module.css'

const About = () => {
  return (
    <>
      <div className={styles.About}>
        <Section id="about">
          <h2>Nosotros</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Minus accusamus magnam iste
            nobis aspernatur doloremque ratione ex eveniet.
            Similique voluptates cupiditate quisquam tempore
            ullam ipsam fuga modi libero accusantium iste.
          </p>
        </Section>
      </div>
      <div className={styles.Benefits}>
        <Section id="benefits">
          <h2>Beneficios</h2>
          <Divider orientation="left">
            Banco de Contenidos
          </Divider>
          <Collapse
            items={[
              {
                key: '1',
                label: 'This is default size panel header',
                children: (
                  <BenefitsCard
                    text={
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima harum. Unde quis, expedita porro minima optio aliquam est repellat quia repudiandae. Non ducimus minus quod, iure sit sapiente vitae.'
                    }
                    alt="Beneficio 1"
                  />
                ),
              },
            ]}
          />
          <Divider orientation="right">
            Programación
          </Divider>
          <Collapse
            items={[
              {
                key: '1',
                label: 'This is default size panel header',
                children: (
                  <BenefitsCard
                    text={
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima harum. Unde quis, expedita porro minima optio aliquam est repellat quia repudiandae. Non ducimus minus quod, iure sit sapiente vitae.'
                    }
                    alt="Beneficio 1"
                  />
                ),
              },
            ]}
          />
          <Divider orientation="left">Conexión</Divider>
          <Collapse
            items={[
              {
                key: '1',
                label: 'This is default size panel header',
                children: (
                  <BenefitsCard
                    text={
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minima harum. Unde quis, expedita porro minima optio aliquam est repellat quia repudiandae. Non ducimus minus quod, iure sit sapiente vitae.'
                    }
                    alt="Beneficio 1"
                  />
                ),
              },
            ]}
          />
        </Section>
      </div>
    </>
  )
}

export default About
