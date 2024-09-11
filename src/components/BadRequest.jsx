import { useNavigate } from 'react-router-dom'
import '../main.css'
import { Card, Button } from '@mui/material'

const BadRequest = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found__container">
      <Card>
        <img src="/assets/404.png" />
      </Card>
      <h5>
        ERROR, la página a la que intenta ingresar no existe
      </h5>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
      >
        Regresar al inicio
      </Button>
    </div>
  )
}

export default BadRequest
