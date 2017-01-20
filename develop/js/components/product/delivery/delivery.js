import angular from 'angular';
import { DeliveryComponent } from './delivery.component';
import DeliveryService from './delivery.service.js';

const delivery = angular
  .module('deliver', [
    // dasdas
    ])
  .service('DeliveryService', DeliveryService)
  .component('delivery', DeliveryComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('delivery', {
        parent: 'app',
        url: 'product/delivery',
        component: 'delivery',
      })
  })
  .name;

export default delivery;