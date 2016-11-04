import angular from 'angular';
import { GroupComponent } from './group.component';

const group = angular
  .module('request.group', [
    // dasdas
    ])
  .component('requestGroup', GroupComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('requestGroup', {
        parent: 'app',
        url: 'product/request/group',
        component: 'requestGroup',
      })
  })
  .name;

export default group;