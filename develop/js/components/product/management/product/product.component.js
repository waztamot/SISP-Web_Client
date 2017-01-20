import ProductController from './product.controller';

export const ProductComponent = {
  bindings: {
    // todo: '<',
    // can: '&'
  },
  controller: ProductController,
  template: `
    <md-button md-colors="{background: 'blue-500'}" class="md-fab buttom-fixed" ui-sref="management.productCreate">
      <md-icon md-font-set="material-icons">add</md-icon>
      <md-tooltip md-direction="top">
        Crear producto
      </md-tooltip>
    </md-button>
    <md-card layout-padding style="min-width: 450px">
      <section layout="column" class="padding-none">
        <div layout="row" layout-align="space-between start" class="padding-none" ng-if="!$ctrl.serach">
          <h4 class="margin-none" layout-padding>Lista de Productos</h4>
          <span flex></span>
          <md-button class="md-icon-button" ng-click="$ctrl.serach=true">
            <md-icon md-font-set="material-icons" aria-label="Buscar">search</md-icon>
          </md-button>
        </div>
        <div layout="row" layout-align="space-between center" class="padding-none" ng-if="$ctrl.serach">
            <input type="text" ng-model="user.name" placeholder="Buscar producto">
          <md-button class="md-icon-button" ng-click="$ctrl.serach=false">
            <md-icon md-font-set="material-icons" aria-label="Buscar">close</md-icon>
          </md-button>
        </div>
      </section>
      <section class="padding-none">
        <ul class="ListGroup">
          <li class="ListGroup-item">
            <p>Productos</p>
            <md-fab-speed-dial md-open="$ctrl.isOpen1" md-direction="left" class="md-scale" ng-mouseenter="$ctrl.isOpen1=true" ng-mouseleave="$ctrl.isOpen1=false">
              <md-fab-trigger>
                <md-button aria-label="menu" class="md-icon-button">
                  <md-icon md-font-set="material-icons" aria-label="Sub-menu">more_vert</md-icon>
                </md-button>
              </md-fab-trigger>
              <md-fab-actions>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">visibility</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">edit</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">monetization_on</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">delete</md-icon>
                </div>
              </md-fab-actions>
            </md-fab-speed-dial>
          </li>
          <li class="ListGroup-item">
            <p>Combos</p>
            <md-fab-speed-dial md-open="$ctrl.isOpen2" md-direction="left" class="md-scale" ng-mouseenter="$ctrl.isOpen2=true" ng-mouseleave="$ctrl.isOpen2=false">
              <md-fab-trigger>
                <md-button aria-label="menu" class="md-icon-button">
                  <md-icon md-font-set="material-icons" aria-label="Sub-menu">more_vert</md-icon>
                </md-button>
              </md-fab-trigger>
              <md-fab-actions>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">visibility</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">edit</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">monetization_on</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">delete</md-icon>
                </div>
              </md-fab-actions>
            </md-fab-speed-dial>
          </li>
          <li class="ListGroup-item">
            <p>Períodos {{demo}}</p>
            <md-fab-speed-dial md-open="$ctrl.isOpen3" md-direction="left" class="md-scale" ng-mouseenter="$ctrl.isOpen3=true" ng-mouseleave="$ctrl.isOpen3=false">
              <md-fab-trigger>
                <md-button aria-label="menu" class="md-icon-button">
                  <md-icon md-font-set="material-icons" aria-label="Sub-menu">more_vert</md-icon>
                </md-button>
              </md-fab-trigger>
              <md-fab-actions>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">visibility</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">edit</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">monetization_on</md-icon>
                </div>
                <div>
                  <md-icon md-font-set="material-icons" aria-label="Android">delete</md-icon>
                </div>
              </md-fab-actions>
            </md-fab-speed-dial>
          </li>
        </ul>
      </section>
    </md-card>
  `,
};