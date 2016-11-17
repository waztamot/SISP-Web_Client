import CardController from './home-card.controller';

export const CardComponent = {
  bindings: {
    // todo: '<',
    // can: '&'
  },
  controller: CardController,
  template: `
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <span class="md-title">Productos</span>
          <!-- <span class="md-subhead">Material</span> -->
        </md-card-header-text>
      </md-card-header>
      <img ng-src="./images/productos.jpg" class="md-card-image" alt="Productos">
      <md-card-actions layout="row" layout-align="center">
        <md-card-icon-actions ng-if="$ctrl.can('product.config')">
          <md-button class="md-fab md-mini md-accent md-hue-3" ng-click="$ctrl.on()">
            <md-icon md-font-set="material-icons">settings</md-icon>
            <md-tooltip md-direction="top">
              Gestion
            </md-tooltip>
          </md-button>
        </md-card-icon-actions>
        <md-button class="md-raised md-primary" ng-click="$ctrl.showDialog($event)">Solicitar</md-button>
        <md-button class="md-primary">Entregar</md-button>
      </md-card-actions>
    </md-card>
  `,
};