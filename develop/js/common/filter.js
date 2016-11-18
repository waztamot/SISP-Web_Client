import angular from 'angular';

const filter = angular.module('SISP.filter', [])
.filter('bolivar', () => {
  return (input) => {
    if (input != null) {
      input = parseFloat(input);
      return input.toLocaleString();
    }
  }
})
.name;

export default filter;
