import angular from 'angular';
import RequestIndividualService from './individual.service.js';
import { IndividualComponent } from './individual.component';
import { ComboDinamicComponent } from './combo-dinamic/combo-dinamic.component';
import { ComboStatictComponent } from './combo-statict/combo-statict.component';
import { ComboSubGroupStatictComponent } from './combo-sub-group/combo-sub-group.component';

const individual = angular
  .module('request.individual', [
    // dasdas
    ])
  .service('RequestIndividualService', RequestIndividualService)
  .component('comboDinamic', ComboDinamicComponent)
  .component('comboStatict', ComboStatictComponent)
  .component('comboSubGroupStatict', ComboSubGroupStatictComponent)
  .component('requestIndividual', IndividualComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('requestIndividual', {
        parent: 'app',
        url: 'product/request/individual',
        component: 'requestIndividual',
        resolve: {
          combos: (ProductService) => {
            return ProductService.getComboList();
          },
          /*staff: (ProductService) => {
            return ProductService.getStaffList();
          }*/
        },
      })
  })
  .name;

export default individual;