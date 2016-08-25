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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-104252-10', 'auto');

/**
 * Soundcloud
 *
 * https://developers.soundcloud.com/docs/api/html5-widget#resources
 */


/**
 * Social
 */

function Social() {

  riot.observable(this)

  this.on('kick', function() {
    console.log('kicked!')
    ga('send', 'pageview', location.pathname)
  })

}

var social = new Social()

