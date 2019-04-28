// 原始引入方式
// import Home from '../views/Home'

// webpack提供的require.ensure()
const Home = (r: any) => require.ensure([], () => r(require('../views/Home')), 'home')

// es提案的import()
const About = () => import(/* webpackChunkName: "about" */ '../views/About')

const Debug = () => import(/* webpackChunkName: 'debug' */ '../views/debug')

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: (to: any, from: any, next: () => void) => {
      next()
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: '/debug',
    name: 'debug',
    component: Debug,
  },
]

export default routes
