import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import '../styles/global.css'

const BadRequest = () => {
  const navigate = useNavigate()
  return (
    <Result
      style={{ padding: '5rem' }}
      status="404"
      title="404"
      subTitle="ERROR, la página a la que intenta ingresar no existe"
      extra={
        <Button
          type="primary"
          onClick={() => navigate('/')}
        >
          Regresar al inicio
        </Button>
      }
    />
  )
}

export default BadRequest
