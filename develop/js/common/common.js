import angular from 'angular';
import Login from './login/login';
import Header from './header/header';
// import Footer from './footer/footer';

const common = angular
  .module('common', [
    Login,
    Header,
    // Footer
  ])
  .name;

export default common;