import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/utils/auth'

Vue.use(Router);

const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
            {
                  path: '/m/',
                  name: 'm-start',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Loans.vue')
            },
            {
                  path: '/l/',
                  name: 'l-start',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/Loans.vue')
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
                  path: '/m/books',
                  name: 'm-books',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Books.vue')
            },
            {
                  path: '/l/books/add',
                  name: 'l-books-add',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/AddBook.vue')
            },
            {
                  path: '/l/books',
                  name: 'l-books',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/Books.vue')
            },
            {
                  path: '/m/loans',
                  name: 'm-loans',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Loans.vue')
            },
            {
                  path: '/l/loans',
                  name: 'l-loans',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/Loans.vue')
            },
            {
                  path: '/l/users/add',
                  name: 'l-users-add',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/AddUsers.vue')
            },
            {
                  path: '/l/users',
                  name: 'l-users',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/Users.vue')
            },
            {
                  path: '/m/profile',
                  name: 'm-profile',
                  meta: {layout: 'member', auth: true, role: 'member'},
                  component: () => import('./views/member/Profile.vue')
            },
            {
                  path: '/l/profile',
                  name: 'l-profile',
                  meta: {layout: 'librarian', auth: true, role: 'librarian'},
                  component: () => import('./views/librarian/Profile.vue')
            }
      ]
});

router.beforeEach((to, from, next) => {

      const requireAuth = to.matched.some(record => record.meta.auth);

      if (requireAuth && !auth.Check()) {
            next('/login?message=login');
      }
      else {
            const role = to.meta.role;
            const name = to.name;
            if ((name === 'login') || (name === 'register')){
                  next()
            }
            else if (auth.Check()) {
                  if (role === auth.CheckRole()){
                        next()
                  }
                  else{
                        next('/login');
                  }

            }
            else{
                  next('/login');
            }
      }
});

export default router