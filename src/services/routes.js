import Todos from '../components/Todos'
import Profile from '../components/Profile'
import Notifications from '../components/Notifications'
import Tokens from '../components/Tokens'
import DeviceInfo from '../components/DeviceInfo'
import Vibrate from '../components/Vibrate'
import Cordova from '../components/Cordova'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import Exit from '../components/Exit'

const routes = [
  { path: '/android_asset/www/index.html',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/index.html',
    component: Todos,
    meta: { auth: true }
  },
  { path: '',
    component: Todos,
    meta: { auth: true }
  },
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
    meta: { auth: true }
  },
  { path: '/profile',
    component: Profile,
    meta: { auth: true }
  },
  { path: '/notifications',
    component: Notifications,
    meta: { auth: true }
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: false }
  },
  { path: '/device-info',
    component: DeviceInfo,
    meta: { auth: false }
  },
  { path: '/vibrate',
    component: Vibrate,
    meta: { auth: false }
  },
  { path: '/login',
    component: Login,
    meta: { auth: false }
  },
  { path: '/exit',
    component: Exit,
    meta: { auth: false }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
