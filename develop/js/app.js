/**
 * app.js
 *
 * Root modulethat imports all modules of the app.
 */
import angular from 'angular';
import animate from 'angular-animate';
import aria from 'angular-aria';
// import icons from 'angular-material-icons';
import material from 'angular-material';
import sanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import authToken from 'satellizer';
import loadingBar from 'angular-loading-bar';
import 'angular-acl';
import '../../node_modules/alertify.js/dist/js/ngAlertify.js';

import Constant from './common/contant';
import { AppComponent } from './app.component';
import Common from './common/common';
import Components from './components/components';

const root = angular
  .module('SISP', [
    animate,
    aria,
    // icons,
    material,
    sanitize,
    uiRouter,
    authToken,
    loadingBar,
    'mm.acl',
    'ngAlertify',
    // alertify,
    Constant,
    Common,
    Components,
  ])
  .component('sispApp', AppComponent) // <sisp-app></sisp-app>
  .config(($mdThemingProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('red', {
        'default': '600', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '300', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A700' // use shade A100 for the <code>md-hue-3</code> class
      })
     .accentPalette('grey', {
        'default': '900', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '300', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': '700' // use shade A100 for the <code>md-hue-3</code> class
      });
    
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        url: '/',
        component: 'sispApp',
      })

  })
  .name;

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['SISP']));

export default root;