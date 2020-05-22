import Vue from 'vue';
import Router from 'vue-router';
//import auth from '@/utils/auth'

Vue.use(Router);

const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
            {
                  path: '/',
                  name: 'start',
                  meta: {layout: 'main', auth: true},
                  component: () => import('./views/Loans.vue')
            },
            {
                  path: '/login',
                  name: 'login',
                  meta: {layout: 'empty'},
                  component: () => import('./views/Login.vue')
            },
            {
                  path: '/register',
                  name: 'register',
                  meta: {layout: 'empty'},
                  component: () => import('./views/Register.vue')
            },
            {
                  path: '/books',
                  name: 'books',
                  meta: {layout: 'main', auth: true},
                  component: () => import('./views/Books.vue')
            },
            {
                  path: '/loans',
                  name: 'loans',
                  meta: {layout: 'main', auth: true},
                  component: () => import('./views/Loans.vue')
            },
            {
                  path: '/users',
                  name: 'users',
                  meta: {layout: 'main', auth: true},
                  component: () => import('./views/Users.vue')
            },
            {
                  path: '/profile',
                  name: 'profile',
                  meta: {layout: 'main', auth: true},
                  component: () => import('./views/Profile.vue')
            }
      ]
});
/*
router.beforeEach((to, from, next) => {

      const requireAuth = to.matched.some(record => record.meta.auth);

      if (requireAuth && !auth.Check()) {
            next('/login?message=login')
      }
      else {
            next()
      }
});
*/
export default router