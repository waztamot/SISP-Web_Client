import controller from './combo-sub-group.controller';

export const ComboSubGroupStatictComponent = {
  bindings: {
    combo: '<',
  },
  controller: controller,
  template: `
    <md-content class="md-padding">
      <div layout="row" layout-align="space-around">
        <p flex-sm="100">Solicitado: <md-icon class="text-success" ng-if="$ctrl.combo.buy">check</md-icon>
                       <md-icon class="text-error" ng-if="!$ctrl.combo.buy">close</md-icon></p>
        <p flex-sm="100">Periodo: <strong>{{ $ctrl.combo.lapse.date_start }} al {{ $ctrl.combo.lapse.date_end }}</strong></p>
        <p flex-sm="100">Cantidad: <strong>{{ $ctrl.data.quantity }}/{{ $ctrl.combo.max_quantity }}</strong></p>
        <p flex-sm="100">Total Bs.: <strong>{{ $ctrl.data.total | bolivar }}</strong></p>
      </div>
      <div layout="row" layout-align="space-around center" layout-wrap>
        <md-card flex="100" flex-lg="45" flex-xl="45" ng-repeat="detail in $ctrl.combo.details">
          <md-card-title>
            <md-card-title-text>
              <span class="md-headline">{{detail.name}}</span>
              <span class="md-subhead">Precio Unitario: {{ detail.price | bolivar }} Bs.</span>
            </md-card-title-text>
          </md-card-title>
          <md-card-content layout="row" layout-align="space-between">
            <fieldset class="list-product" flex="95">
              <legend>Lista de productos</legend>
              <md-list>
                <md-list-item class="md-2-line" ng-click="null" ng-repeat="subDetail in detail.details">
                  <img ng-src="./images/{{subDetail.product.image}}" class="md-avatar" alt=""/>
                  <div class="md-list-item-text">
                    <h3>{{ subDetail.product.name }}</h3>
                    <h4>{{ subDetail.quantity }} {{ subDetail.unity }}</h4>
                    <p>Precio Unitario: {{ subDetail.product.price.price | bolivar }} Bs.</p>
                  </div>
                  <md-divider></md-divider>
                </md-list-item>
              </md-list>
            </fieldset>
            <md-card-actions layout="column">
              <md-button class="md-icon-button" aria-label="Sumar" ng-click="$ctrl.add($index)">
                <md-icon md-font-set="material-icons">add</md-icon>
              </md-button>
              <p class="align-center">{{detail.quantity}}</p>
              <md-button class="md-icon-button" aria-label="Restar" ng-click="$ctrl.subtract($index)">
                <md-icon md-font-set="material-icons">remove</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-content>
        </md-card>
      </div>
      <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-click="$ctrl.onSubmit()" ng-if="$ctrl.button.cancel" ng-disabled="$ctrl.button.submit">Solicitar</md-button>
        <md-button class="md-primary" ng-click="$ctrl.onCancel()" ng-if="!$ctrl.button.cancel" ng-disabled="$ctrl.button.cancel">Cancelar Pedido</md-button>
      </div>
    </md-content>
  `,
};