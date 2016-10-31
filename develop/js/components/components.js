/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular';

import Home from './home/home';
import Product from './product/product';

const components = angular
  .module('SISP.components', [
    Home,
    Product,
  ])
  .name;

export default components;