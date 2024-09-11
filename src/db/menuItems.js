import CollectionsIcon from '@mui/icons-material/Collections'
import HomeIcon from '@mui/icons-material/Home'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

export const menuItems = [
  {
    name: 'Inicio',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'Catálogo',
    path: '/movies',
    icon: CollectionsIcon,
  },
  {
    name: 'Rea',
    path: '/rea',
    icon: LocalMoviesIcon,
  },
  {
    name: 'Banco de Contenidos',
    path: '/rea/movies',
    icon: SlideshowIcon,
  },
  {
    name: 'Registro',
    path: '/rea/register',
    icon: AppRegistrationIcon,
  },
  {
    name: 'Contacto',
    path: '/contact',
    icon: ContactSupportIcon,
  },
]
