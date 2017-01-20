import controller from './controller';

export const ProductCreateComponent = {
  bindings: {
    // todo: '<',
    // can: '&'
  },
  // controller: controller,
  template: `
    <md-card layout-padding style="min-width: 450px">
      <section layout="row" layout-align="space-between start" class="padding-none">
        <h4 class="margin-none" layout-padding>Crea producto</h4>
        <span flex></span>
      </section>
      <section class="padding-none" layout="column">
        <md-input-container>
          <label>Tipo</label>
          <md-select ng-model="$ctrl.userState">
            <md-option><em>Seleccione</em></md-option>
            <md-option ng-repeat="state in $ctrl.states" ng-value="state.abbrev">
              {{state.abbrev}}
            </md-option>
          </md-select>
        </md-input-container>
        <md-input-container md-no-float class="margin-none">
          <label>Nombre</label>
          <input type="text" ng-model="user.name">
        </md-input-container>
        <md-input-container md-no-float class="margin-none">
          <label>Descripción</label>
          <input type="text" ng-model="user.name">
        </md-input-container>
        <md-input-container md-no-float class="margin-none">
          <label>Codigo de barra</label>
          <input type="text" ng-model="user.name">
        </md-input-container>
        <div>
          <label for="">Imagen</label>
          <input type="file" ng-model="user.name">
        </div>
        <md-checkbox ng-model="data.cb1" aria-label="Checkbox 1">Habilitado</md-checkbox>
      </section>
      <div layout="row" layout-align="center center">
        <md-button class="md-primary md-raised" ng-click="$ctrl.onSubmit()">Aceptar</md-button>
        <md-button class="md-primary" ng-click="$ctrl.onCancel()">Cancelar</md-button>
      </div>
    </md-card>
  `,
};