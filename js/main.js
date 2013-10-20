/**
 * Created by david on 10/20/13.
 */

require.config({
  paths: {
    angular: 'bower/angular.js'
  }
});

require(["angular"], function(util) {
  //This function is called when bower/angular.js is loaded.
  //If util.js calls define(), then this function is not fired until
  //util's dependencies have loaded, and the util argument will hold
  //the module value for "helper/util".
});