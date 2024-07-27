import { Home } from '../pages/Home/Home'

import { Graphs } from '../pages/Graphs/Graphs'
import graphs from '../assets/icons/graphs.svg'
import { ManageLists } from '../pages/Admin/ManageLists/ManageLists'
import { UsersPermissions } from '../pages/Admin/UsersPermissions/UsersPermissions'

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
    component: Graphs,
    isDisplayNavbar: true,
    icon: graphs,
  },
  {
    name: 'אדמין',
    path: '/admin/manage-lists',
    component: ManageLists,
    isDisplayNavbar: false,
  },
  {
    name: 'משתמשים והרשאות',
    path: '/admin/users-permissions',
    component: UsersPermissions,
    isDisplayNavbar: false,
  },
]
