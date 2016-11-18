import angular from 'angular';
import Login from './login/login';
import Header from './header/header';
import Filter from './filter';
// import Footer from './footer/footer';

const common = angular
  .module('common', [
    Login,
    Header,
    Filter,
    // Footer
  ])
  .name;

export default common;