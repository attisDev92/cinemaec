import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  UsergroupDeleteOutlined,
  VideoCameraOutlined,
  SolutionOutlined,
  MessageOutlined,
  CaretLeftFilled,
  BarsOutlined,
} from '@ant-design/icons'
import { Button, Menu } from 'antd'
import styles from './Header.module.css'
const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: <Link to={'/'}>Home</Link>,
  },
  {
    key: '2',
    icon: <UsergroupDeleteOutlined />,
    label: <HashLink to={'/#about'}>Nosotros</HashLink>,
    children: [
      {
        key: '6',
        label: (
          <HashLink to={'/#benefits'}>Beneficios</HashLink>
        ),
      },
    ],
  },
  {
    key: '3',
    icon: <VideoCameraOutlined />,
    label: (
      <Link to={'/gallery'}> Banco de Contenidos</Link>
    ),
  },
  {
    key: '4',
    icon: <SolutionOutlined />,
    label: <Link to={'/register'}>Registro</Link>,
  },
  {
    key: '5',
    icon: <MessageOutlined />,
    label: <HashLink to={'/#contact'}>Contacto</HashLink>,
  },
]
import './Header.module.css'
import { HashLink } from 'react-router-hash-link'

const MenuButton = ({ label, icon }) => {
  return (
    <div>
      {' '}
      {label} {icon}{' '}
    </div>
  )
}

const MenuContainer = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={styles.Menu}>
      <Button
        className={styles.buttonMenu}
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? (
          <MenuButton
            label="Menú"
            icon={<BarsOutlined alt="Abrir Menú" />}
          />
        ) : (
          <MenuButton
            label="Cerrar"
            icon={<CaretLeftFilled alt="Cerrar Menú" />}
          />
        )}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        className={styles.menu__bar}
      />
    </div>
  )
}

export default MenuContainer
