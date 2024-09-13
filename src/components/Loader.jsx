import { useEffect, useState } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

const style = {
  display: 'fixed',
  top: 0,
  zIndex: 100,
}

const Loader = ({ isActive }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isActive) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [isActive])

  return (
    <div style={style}>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loader
