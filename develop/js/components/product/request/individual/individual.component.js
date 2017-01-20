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
    <section layout-padding>
      <div layout="row" layout-align="space-around center" layout-wrap >
        <md-whiteframe class="md-whiteframe-6dp" flex="100" flex-gt-sm="80" flex-gt-md="75" layout layout-align="center center">
          <md-tabs md-dynamic-height md-border-bottom flex="100">
            <md-tab label="{{combo.name}}" ng-repeat="combo in $ctrl.combos">

              <combo-statict ng-if="combo.type == 'Estatico'" combo="combo"></combo-statict>
            
              <combo-dinamic ng-if="combo.type == 'Dinamico'" combo="combo"></combo-dinamic>

              <combo-sub-group-statict ng-if="combo.type == 'SubCombo-Estatico'" combo="combo"></combo-sub-group-statict>
              
            </md-tab>
          </md-tabs>
        </md-whiteframe>
      </div>
    </section>
    `,
};
