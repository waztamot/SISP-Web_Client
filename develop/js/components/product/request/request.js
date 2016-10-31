import angular from 'angular';
import Group from './group/group';
import Individul from './individual/individual';
// import { CardModuleComponent } from './card_module.component';

const request = angular
  .module('product.request', [
    Group,
    Individul,
    ])
  // .component('cardModule', CardModuleComponent)
  .name;

export default request;