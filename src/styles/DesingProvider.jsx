import { ConfigProvider } from 'antd'

const DesignProvider = props => {
  const themDesing = {
    token: {
      colorPrimary: '#be3144',
      colorInfo: '#be3144',
      colorSuccess: '#3a4750',
      colorTextBase: '#303841',
      borderRadius: 2,
      wireframe: false,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    },
  }

  return (
    <ConfigProvider theme={themDesing}>
      {props.children}
    </ConfigProvider>
  )
}

export default DesignProvider
