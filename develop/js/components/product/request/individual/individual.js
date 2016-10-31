import angular from 'angular';
import { IndividualComponent } from './individual.component';

const individual = angular
  .module('request.individual', [
    // dasdas
    ])
  .component('requestIndividual', IndividualComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('productIndividual', {
        parent: 'app',
        component: 'requestIndividual',
        url: 'product/request/individual',
      })
  })
  .name;

export default individual;