// import DeliveryController from './delivery.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const ManagementComponent = {
  // bindings: {
    // requisition: '<',
    // staff: '<',
  // },
  // controller: DeliveryController,
  template: `
    <div layout="row" layout-align="space-around center" >

        <md-sidenav layout-wrap style="height:92vh;" class="md-sidenav-left" md-component-id="left" md-whiteframe="4" md-is-locked-open="$mdMedia('gt-sm')">

          <md-toolbar md-colors="{background: 'blue-500'}" style="min-heigth: 40px" class="title-bar-management">
            <md-icon md-font-set="material-icons">settings</md-icon>
          </md-toolbar>
          <md-content>
            <md-list class="padding-none">
              <md-list-item class="" ng-click="null" ui-sref="management.product">
                <p>Productos</p>
                <md-divider></md-divider>
              </md-list-item>
              <md-list-item class="" ng-click="null">
                <p>Combos</p>
                <md-divider></md-divider>
              </md-list-item>
              <md-list-item class="" ng-click="null">
                <p>Períodos</p>
                <md-divider></md-divider>
              </md-list-item>
            </md-list>
          </md-content>

        </md-sidenav>

        <md-content flex>

          <div layout="column" layout-align="start center" ui-view>
          </div>

        </md-content>
    </div>
    `,
};
