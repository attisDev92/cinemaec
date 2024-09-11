import { SpeedDial, SpeedDialAction } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PlaceIcon from '@mui/icons-material/Place'

const SocialSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="rrss"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      icon={<AddCircleIcon />}
    >
      <SpeedDialAction
        icon={<FacebookIcon />}
        tooltipTitle="Facebook"
        href="https://www.facebook.com/Creatividad.Ec"
        target="_blank"
      />
      <SpeedDialAction
        icon={<InstagramIcon />}
        tooltipTitle="Instagram"
        href="https://www.instagram.com/creatividad_ec/?hl=es"
        target="_blank"
      />
      <SpeedDialAction
        icon={<PlaceIcon />}
        tooltipTitle="Ubicación"
        href="https://maps.app.goo.gl/WRSKKHGnx3HxgfRK9"
        target="_blank"
      />
    </SpeedDial>
  )
}

export default SocialSpeedDial
