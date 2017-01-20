import angular from 'angular';
import { ManagementComponent } from './management.component';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product/create/index';

const management = angular
  .module('management.product', [
    // dasdas
    ])
  .component('managementModule', ManagementComponent)
  .component('product', ProductComponent)
  .component('productCreate', ProductCreateComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('management', {
        parent: 'app',
        url: 'product/management',
        component: 'managementModule',
      })
      .state('management.product', {
        url: '/product',
        views: {
          '': {
            component: 'product',
          },
        },
      })
      .state('management.productCreate', {
        url: '/product/create',
        views: {
          '': {
            component: 'productCreate',
          },
        },
      })
  })
  .name;

export default management;