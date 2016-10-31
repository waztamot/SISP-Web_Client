import angular from 'angular';
// import Deliver from './deliver/deliver';
import Request from './request/request';
// import Setup from './setup/setup';

const product = angular
  .module('product', [
    // Deliver,
    Request,
    // Setup,
    ])
  .name;

export default product;