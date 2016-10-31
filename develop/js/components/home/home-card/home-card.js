import angular from 'angular';
import { CardComponent } from './home-card.component';

const card_module = angular
  .module('home.card', [
    // dasdas
    ])
  .component('homeCard', CardComponent)
  .name;

export default card_module;