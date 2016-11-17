import ComboStatictController from './combo-statict.controller';

export const ComboStatictComponent = {
  bindings: {
    combo: '<',
  },
  controller: ComboStatictController,
  template: `
    <md-content class="md-padding">
      <div layout="row" layout-align="space-around">
        <p>Solicitado: <md-icon class="text-success" ng-if="$ctrl.combo.buy">check</md-icon>
                       <md-icon class="text-error" ng-if="!$ctrl.combo.buy">close</md-icon></p>
        <p>Cantidad: <strong>{{$ctrl.data.quantity}}/{{$ctrl.combo.max_quantity}}</strong></p>
        <p>Total Bs.: <strong>{{$ctrl.data.total}}</strong></p>
      </div>
      <fieldset class="list-product">
        <legend>Lista de productos</legend>
        <md-list>
          <md-list-item class="md-2-line" ng-click="null" ng-repeat="detail in $ctrl.combo.details">
            <img ng-src="./images/{{detail.product.image}}" class="md-avatar" alt=""/>
            <div class="md-list-item-text">
              <h3>{{detail.product.name}}</h3>
              <h4>{{detail.quantity}} {{detail.unity}}</h4>
              <p>Precio Unitario: {{detail.product.price.price}} Bs.</p>
            </div>
            <!-- <md-switch ng-model="$ctrl.data.check" ng-change="$ctrl.onSelect($ctrl.data.check, detail.product.price.price)" aria-label="{{detail.product.name}}"></md-switch> -->
            <md-divider></md-divider>
          </md-list-item>
        </md-list>
      </fieldset>
      <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-click="$ctrl.onSubmit()">Solicitar</md-button>
      </div>
    </md-content>
  `,
};