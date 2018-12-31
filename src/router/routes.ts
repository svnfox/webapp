import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: (to, from, next) => {
      next()
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
]

export default routes
