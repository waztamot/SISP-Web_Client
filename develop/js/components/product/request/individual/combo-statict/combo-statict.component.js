import ComboStatictController from './combo-statict.controller';

export const ComboStatictComponent = {
  bindings: {
    combo: '<',
  },
  controller: ComboStatictController,
  template: `
    <md-content class="md-padding">
      <div layout="row" layout-align="space-around" layout-wrap>
        <p flex-sm="100">Solicitado: <md-icon class="text-success" ng-if="$ctrl.combo.buy">check</md-icon>
                       <md-icon class="text-error" ng-if="!$ctrl.combo.buy">close</md-icon></p>
        <p flex-sm="100">Periodo: <strong>{{ $ctrl.combo.lapse.date_start }} al {{ $ctrl.combo.lapse.date_end }}</strong></p>
        <p flex-sm="100">Cantidad: <strong>{{ $ctrl.data.quantity }}/{{ $ctrl.combo.max_quantity }}</strong></p>
        <p flex-sm="100">Total Bs.: <strong>{{ $ctrl.data.total | bolivar }}</strong></p>
      </div>
      <fieldset class="list-product">
        <legend>Lista de productos</legend>
        <md-list>
          <md-list-item class="md-2-line" ng-click="null" ng-repeat="detail in $ctrl.combo.details">
            <img ng-src="./images/{{detail.product.image}}" class="md-avatar" alt=""/>
            <div class="md-list-item-text">
              <h3>{{ detail.product.name }}</h3>
              <h4>{{ detail.quantity }} {{ detail.unity }}</h4>
              <p>Precio Unitario: {{ detail.product.price.price | bolivar }} Bs.</p>
            </div>
            <md-divider></md-divider>
          </md-list-item>
        </md-list>
      </fieldset>
      <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-click="$ctrl.onSubmit()" ng-if="$ctrl.button.cancel" ng-disabled="$ctrl.button.submit">Solicitar</md-button>
        <md-button class="md-primary" ng-click="$ctrl.onCancel()" ng-if="!$ctrl.button.cancel" ng-disabled="$ctrl.button.cancel">Cancelar Pedido</md-button>
      </div>
    </md-content>
  `,
};