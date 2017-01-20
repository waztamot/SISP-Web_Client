import angular from 'angular';
import RequestGroupService from './group.service';
import { GroupComponent } from './group.component';

const group = angular
  .module('request.group', [
    // dasdas
    ])
  .service('RequestGroupService', RequestGroupService)
  .component('requestGroup', GroupComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('requestGroup', {
        parent: 'app',
        url: 'product/request/group',
        component: 'requestGroup',
        resolve: {
          combos: (ProductService) => {
            return ProductService.getComboList();
          },
          staff: (ProductService) => {
            return ProductService.getStaffList();
          }
        }
      })
  })
  .name;

export default group;