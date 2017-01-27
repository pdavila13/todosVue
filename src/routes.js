import Todos from 'components/Todos'
import Tokens from 'components/Tokens'
import Profile from 'components/Profile'
import Login from 'components/Login'
import NotFound from 'components/NotFound'

const routes = [
    { path: '/todos', component: Todos, auth: true },
    { path: '/tokens', component: Tokens, auth: false },
    { path: '/profile', component: Profile, auth: true },
    { path: '/login', component: Login, auth: false },
    { path: '*', component: NotFound, auth: false }
]

export default routes
