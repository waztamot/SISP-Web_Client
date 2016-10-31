import angular from 'angular';
import HomeService from './home.service';
import { HomeComponent } from './home.component';
import CardModule from './home-card/home-card';

const home = angular
  .module('home', [
    CardModule,
  ])
  .service('HomeService', HomeService)
  .component('home', HomeComponent)
  .config(($stateProvider, AclServiceProvider) => {
    AclServiceProvider.resume();
    $stateProvider
      .state('home', {
        parent: 'app',
        url: 'home',
        component: 'home',
        /*resolve: {
          can: (AclService) => {return AclService.can}
        }*/
      })
  })
  .name;

export default home;