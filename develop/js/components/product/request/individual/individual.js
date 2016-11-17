import angular from 'angular';
import { IndividualComponent } from './individual.component';
import { ComboDinamicComponent } from './combo-dinamic/combo-dinamic.component';
import { ComboStatictComponent } from './combo-statict/combo-statict.component';

const individual = angular
  .module('request.individual', [
    // dasdas
    ])
  .component('comboDinamic', ComboDinamicComponent)
  .component('comboStatict', ComboStatictComponent)
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
        }
      })
  })
  .name;

export default individual;