import angular from 'angular';
import LoginService from './login.service';
import RedirectWhenLoggedOut from './login.factory.redirectWhenLoggedOut';
import { LoginComponent } from './login.component';

const login = angular
  .module('login', [
    'SISP.constant',
    ])
  .factory('redirectWhenLoggedOut', RedirectWhenLoggedOut) // Refactor para angular.service()
  .service('LoginService', LoginService)
  .component('login', LoginComponent)
  .config(($httpProvider, $authProvider, $urlRouterProvider, $stateProvider, ResourcesUrl) => {
    $authProvider.loginUrl = `${ResourcesUrl.api}auth/login`;
    $authProvider.signupUrl = `${ResourcesUrl.api}auth/signup`;
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "SISP";
    $authProvider.storageType = 'sessionStorage';

    $httpProvider.interceptors.push('redirectWhenLoggedOut');

    $stateProvider
      .state('login', {
        url: '/auth/login',
        component: 'login'
      })
  })
  .run(($transitions, $auth, $state) => {
    console.log('Run Login');
    
    if (!$auth.isAuthenticated()) {
      $state.go('login');
    }

    $transitions.onStart({ }, (trans) => {
      // let $auth = trans.injector().get('$auth');
      // let $state = trans.injector().get('$state');
      let AclService = trans.injector().get('AclService');
      let LoginService = trans.injector().get('LoginService');
      // If there is any user data in local storage then the user is quite
      // likely authenticated. If their token is expired, or if they are
      // otherwise not actually authenticated, they will be redirected to
      // the auth state because of the rejected request anyway
      if($auth.isAuthenticated()) {
        // Grab the user from local storage and parse it to an object
        if (!AclService.resume()) {
          LoginService.getPermissions()
          .then((response) => {
            let aclData = response.acl;
            let role = Object.keys(response.acl)[0];

            AclService.setAbilities(aclData);
            AclService.attachRole(role);
            trans.router.urlRouter.sync();
          })
          .catch((fails) => {
            $auth.logout();
            sessionStorage.removeItem('user');
            $state.go('login');
          })
        }

        if(trans.to().name === 'login') {
          return trans.router.stateService.target('home');
        }
      }
    });

    /*$transitions.onError({ }, (event, toState, toParams, fromState, fromParams, error) => {
      if (error.unauthorized) {
        $state.go('404');
      }
    });*/
  })
  .name;

export default login;