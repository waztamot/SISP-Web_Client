import angular from 'angular';
// import Deliver from './deliver/deliver';
import ProductService from './product.service';
import Request from './request/request';
// import Setup from './setup/setup';

const product = angular
  .module('product', [
    // Deliver,
    Request,
    // Setup,
    ])
  .service('ProductService', ProductService)
  .name;

export default product;