import { Home } from '../pages/Home/Home'

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
  },
]
