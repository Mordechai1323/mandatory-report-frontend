import { Home } from '../pages/Home/Home'

import graphs from '../assets/icons/graphs.svg'
import displayScreen from '../assets/icons/displayScreen.svg'

export const PAGES = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    isDisplayNavbar: false,
  },
  {
    name: 'מסך תצוגה',
    path: '/display-screen',
    component: Home,
    isDisplayNavbar: true,
    icon: displayScreen,
  },
  {
    name: 'גרפים',
    path: '/graphs',
    component: Home,
    isDisplayNavbar: true,
    icon: graphs,
  },
]
