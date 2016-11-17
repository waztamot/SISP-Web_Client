import IndividualController from './individual.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const IndividualComponent = {
  bindings: {
    combos: '<',
    // staff: '<',
  },
  controller: IndividualController,
  template: `
    <div layout="row" layout-align="space-around center" layout-wrap>
      <md-whiteframe class="md-whiteframe-6dp" flex="100" flex-gt-sm="80" flex-gt-md="75" layout layout-align="center center">
        <md-tabs md-dynamic-height md-border-bottom flex="100">
          <md-tab label="{{combo.name}}" ng-repeat="combo in $ctrl.combos.data">

            <combo-statict ng-if="combo.type == 'Estatico'" combo="combo"></combo-statict>
          
            <combo-dinamic ng-if="combo.type == 'Dinamico'" combo="combo"></combo-dinamic>
            
            <!-- <md-content class="md-padding">
              <div layout="row" layout-align="space-around">
                <p>Cantidad: <strong>1</strong></p>
                <p>Total Bs.: <strong>680,00</strong></p>
              </div>
              <fieldset class="list-product">
                <legend>Lista de productos</legend>
                <md-list>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/huevos.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Huevos El Tunal</h3>
                      <h4>4 Cartones</h4>
                      <p>Precio Und.: 170,00 Bs.</p>
                    </div>
                    <md-divider></md-divider>
                  </md-list-item>
                </md-list>
              </fieldset>
              <div layout="row" layout-align="center center">
                <md-button class="md-primary md-raised" ng-click="$ctrl.test()">Adquirir</md-button>
              </div>
            </md-content> -->
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </div>
    `,
};
