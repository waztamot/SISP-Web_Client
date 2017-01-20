import angular from 'angular';
import Delivery from './delivery/delivery';
import ProductService from './product.service';
import Request from './request/request';
import Management from './management/management';

const product = angular
  .module('product', [
    Delivery,
    Request,
    Management,
    ])
  .service('ProductService', ProductService)
  .name;

export default product;