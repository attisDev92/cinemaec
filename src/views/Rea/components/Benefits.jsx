import styles from '../Rea.module.css'
import Section from '../../../components/Section'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { benefitsText } from '../../../db/benefitsTexts'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Benefits = () => {
  return (
    <div className={styles.Benefits}>
      <Section id="benefits">
        <h2>Beneficios</h2>
        {benefitsText.map((benefit, i) => (
          <>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel-${i}`}
              id={`panel_id-${i}`}
            >
              {benefit.title}
            </AccordionSummary>
            <AccordionDetails>
              {benefit.subtitle}
              {benefit.text}
            </AccordionDetails>
          </>
        ))}
        <Link to="/register" className="button-primary">
          Regístrate
        </Link>
      </Section>
    </div>
  )
}

export default Benefits
