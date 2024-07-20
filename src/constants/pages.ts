import { Home } from '../pages/Home/Home'

import graphs from '../assets/icons/graphs.svg'
import { ManageLists } from '../pages/Admin/ManageLists/ManageLists'

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
  {
    name: 'אדמין',
    path: '/admin/manage-lists',
    component: ManageLists,
    isDisplayNavbar: false,
  },
]
