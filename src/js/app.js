"use strict";

import Vue from 'vue';
import VueRouter from 'vue-router'

import Top from './views/top.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [

    { path: '/', component: Top, props: {} },
    { path: '*', component: Top, props: {} }

  ]
});

var app = new Vue({
  el: '#app',
  components: { Top },
  template: '<Top/>',
  data: {
    message: 'Hello Vue.js!'
  }
});

// const app = new Vue({
//   data: () => {
//     return {
//       // 'wp': wp,
//       // 'api': {
//       //   'endpoint': window.WP_API_Settings.root.replace(/\/$/,''),
//       //   'nonce': {
//       //     'wp_rest': window.WP_API_Settings.nonce,
//       //     'postman': window.WP_API_Settings.nonce_postman
//       //   }
//       // },
//       // 'url': {
//       //   'origin': location.origin
//       // }
//     }
//   },
//   methods: {
//   },
//   router,
//   render: a => a(App)
// }).$mount('#app');

/**
 * Init FB
 */

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1769721059976622',
    xfbml      : true,
    version    : 'v2.7'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

/**
 * Init GA
 */

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-104252-10');
// ga('send', 'pageview', location.pathname)


/**
 * Soundcloud
 *
 * https://developers.soundcloud.com/docs/api/html5-widget#resources
 */

