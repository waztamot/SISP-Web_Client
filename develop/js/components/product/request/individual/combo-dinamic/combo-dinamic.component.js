import ComboDinamicController from './combo-dinamic.controller';

export const ComboDinamicComponent = {
  bindings: {
    combo: '<',
  },
  controller: ComboDinamicController,
  template: `
    <md-content class="md-padding">
      <div layout="row" layout-align="space-around">
        <p>Solicitado: <md-icon class="text-success" ng-if="$ctrl.combo.buy">check</md-icon>
                       <md-icon class="text-error" ng-if="!$ctrl.combo.buy">close</md-icon></p>
        <p>Cantidad: <strong>0/{{$ctrl.combo.max_quantity}}</strong></p>
        <p>Total Bs.: <strong>0,00</strong></p>
      </div>
      <div layout="row" layout-align="space-around center" layout-wrap>
        <md-card flex="100" flex-lg="45" flex-xl="45" ng-repeat="detail in $ctrl.combo.details">
          <md-card-title>
            <md-card-title-text>
              <span class="md-headline">{{detail.product.name}}</span>
              <span class="md-subhead">Precio Unitario: {{detail.product.price.price}} Bs.</span>
            </md-card-title-text>
          </md-card-title>
          <md-card-content layout="row" layout-align="space-between">
            <div class="md-media-xl">
              <img ng-src="./images/{{detail.product.image}}" alt="{{detail.product.name}}" width="100%"/>
            </div>
            <md-card-actions layout="column">
              <md-button class="md-icon-button" aria-label="Sumar">
                <md-icon md-font-set="material-icons">add</md-icon>
              </md-button>
              <p class="align-center">0</p>
              <md-button class="md-icon-button" aria-label="Restar">
                <md-icon md-font-set="material-icons">remove</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-content>
        </md-card>
      </div>
      <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-click="$ctrl.test()">Solicitar</md-button>
      </div>
    </md-content>
  `,
};