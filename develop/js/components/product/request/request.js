import angular from 'angular';
import Group from './group/group';
import Individual from './individual/individual';
// import { CardModuleComponent } from './card_module.component';

const request = angular
  .module('product.request', [
    Group,
    Individual,
    ])
  // .component('cardModule', CardModuleComponent)
  .name;

export default request;