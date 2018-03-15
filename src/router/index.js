import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import LoggedIn from '@/components/LoggedIn';
import NotLoggedIn from '@/components/NotLoggedIn';
import ThemeSite from '@/components/ThemeSite';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
      path: '/tema-side',
      name: 'ThemeSite',
      component: ThemeSite,
    },
  ],
});
