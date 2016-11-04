import angular from 'angular';

const constant = angular.module('SISP.constant', [])
.constant('ResourcesUrl', {
  // api:    'http://172.17.4.4:8000/api/',
  api:    'http://172.17.4.6:8000/api/',
})
.name;

export default constant;
