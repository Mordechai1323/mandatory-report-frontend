import { Home } from '../pages/Home/Home'

import graphs from '../assets/icons/graphs.svg'

export const PAGES = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    isDisplayNavbar: false,
  },
  {
    name: 'גרפים',
    path: '/graphs',
    component: Home,
    isDisplayNavbar: true,
    icon: graphs,
  },
]
