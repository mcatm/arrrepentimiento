"use strict";

// import Vue from 'vue';

// var demo = new Vue({
//   el: '#demo',
//   data: {
//     message: 'Hello Vue.js!'
//   }
// });

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

