import DeliveryController from './delivery.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const DeliveryComponent = {
  bindings: {
    // requisition: '<',
    // staff: '<',
  },
  controller: DeliveryController,
  templateUrl: './templates/components/delivery.html',
  /*template: `
    <div layout="row" layout-align="space-around center" layout-wrap>
      <md-whiteframe class="md-whiteframe-6dp" flex="100" flex-gt-sm="80" flex-gt-md="75" layout layout-align="center center">
        <md-tabs md-dynamic-height md-border-bottom flex="100">
          <md-tab label="{{combo.name}}" ng-repeat="combo in $ctrl.combos">
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </div>
    `,*/
};
