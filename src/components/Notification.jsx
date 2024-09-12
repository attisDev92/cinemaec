import { useSelector } from 'react-redux'

const styles = {
  position: 'fixed',
  top: '10rem',
  width: '90%',
}

//types of style success info warning error
const Notification = () => {
  const notification = useSelector(
    state => state.notification,
  )

  if (!notification.active) return null

  return (
    <div style={styles}>
      <Alert variant="filled" severity={notification.style}>
        {notification.message}
      </Alert>
    </div>
  )
}

export default Notification
