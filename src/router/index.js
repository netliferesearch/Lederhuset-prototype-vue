import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import LoggedIn from '@/components/LoggedIn';
import NotLoggedIn from '@/components/NotLoggedIn';
import ThemeSite from '@/components/ThemeSite';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/innlogget',
      name: 'LoggedIn',
      component: LoggedIn,
    },
    {
      path: '/ikke-innlogget',
      name: 'NotLoggedIn',
      component: NotLoggedIn,
    },
    {
      path: '/kontakt-oss',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/tema-side',
      name: 'ThemeSite',
      component: ThemeSite,
    },
  ],
});
