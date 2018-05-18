"use strict";

import vue from 'vue';
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import Top from './views/top.vue'
import About from './views/about.vue'
import Inspirations from './views/inspirations.vue'
import Works from './views/works.vue'
import NotFound from './views/not-found.vue'

import VueAnalytics from 'vue-analytics'

vue.use(VueRouter)
vue.use(VueHead, {
  separator: '-',
  complement: 'Arrepentimiento'
})

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [

    { path: '/', component: Top, props: {} },
    { path: '/about', component: About, props: {} },
    { path: '/inspirations', component: Inspirations, props: {} },
    { path: '/works', component: Works, props: {} },
    { path: '*', component: NotFound, props: {} }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});

router.beforeEach((to, from, next) => {
  // this.isLoading = false
  // console.log(to)
  return next()
})

vue.use(VueAnalytics, {
  id: 'UA-104252-10',
  router
})

var app = new vue({
  router,
  data:  {
    isLoading: true,
    isJapanese: true
  },
  created: function() {
    // this.isLoading = true
  },
  mounted: function() {
    this.isLoading = false
  }
}).$mount('#app');

/**
 * Init FB
 */

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1769721059976622',
//     xfbml      : true,
//     version    : 'v2.7'
//   });
// };

// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));
