import angular from 'angular';
import { IndividualComponent } from './individual.component';

const individual = angular
  .module('request.individual', [
    // dasdas
    ])
  .component('requestIndividual', IndividualComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('requestIndividual', {
        parent: 'app',
        url: 'product/request/individual',
        component: 'requestIndividual',
      })
  })
  .name;

export default individual;