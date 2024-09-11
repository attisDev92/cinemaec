import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Drawer,
} from '@mui/material'
import { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { menuItems } from '../db/menuItems'

const Menu = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = newOpen => {
    setOpen(newOpen)
  }

  return (
    <>
      <Button
        className={styles.buttonMenu}
        variant="contained"
        onClick={() => toggleDrawer(true)}
      >
        <MenuOpenIcon />
        Menú
      </Button>
      <Drawer
        className={styles.menu__container}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <Link to={item.path}>{item.name}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Menu
