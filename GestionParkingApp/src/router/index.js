import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/parkings',
    component: () => import('../views/Parkings.vue')
  },
  {
    path: '/parking/:id',
    component: () => import('../views/Parking.vue')
  },
  {
    path: '/connexion/:id',
    component: () => import('../views/Connection.vue')
  },
  {
    path: '/reserver/:id',
    component: () => import('../user_connecte/Reservation.vue')
  },
  {
    path: '/reserverDetail',
    component: () => import('../user_connecte/ParkingReserveDetail.vue')
  },
  {
    path: '/tabs/',
    component: () => import('../views/TabsPages.vue'),
    children : [
      {
        path:'',
        redirect: '/tabs/home'
      },
      {
        path:'home',
        component:() => import('../views/Parkings.vue')
      },
      {
        path:'villes',
        component: () => import('../menu/Villes.vue')
      },
      {
        path:'parkings',
        component: () => import('../menu/Parkings.vue')
      },
      {
        path:'parkings/add',
        component: () => import('../menu/AddParking.vue')
      },
      {
        path:'parkings/detail/:id',
        component: () => import('../menu/DetailParking.vue')
      },
      {
        path:'parkings/detail/modify/:id',
        component: () => import('../menu/ModifyParking.vue')
      },
      {
        path:'account',
        component: () => import('../menu/Account.vue')
      }
    ]
  },
  {
    path:'/test',
    component:() => import('../views/test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
