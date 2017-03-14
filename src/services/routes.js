import Todos from '../components/Todos'
import Tokens from '../components/Tokens'
import Profile from '../components/Profile'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Cordova from '../components/Cordova'

const routes = [
  { path: '/',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/todos',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/tokens',
    component: Tokens,
    meta: { auth: false }
  },
  { path: '/profile',
    component: Profile,
    meta: { auth: true }
  },
  { path: '/login',
    component: Login,
    meta: { auth: false }
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: true }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
