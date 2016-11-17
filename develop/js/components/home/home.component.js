 import HomerController from './home.controller';

 export const HomeComponent = {
    /*bindings: {
      can: '&'
    },*/
    controller: HomerController,
    template: `
      <div layout="row" layout-align="space-around center" layout-wrap>
        <!-- <home-card flex-xs="98" flex-gt-xs="50" flex-lg="30" flex-xl="30" ng-repeat="(key, value) in [1,2,3,4,5,6,8]"></home-card> -->

        <md-card flex-xs="98" flex-gt-xs="50" flex-lg="30" flex-xl="30" ng-if="$ctrl.can('product')">
          <md-card-header>
            <md-card-header-text>
              <span class="md-title">Productos</span>
              <!-- <span class="md-subhead">Material</span> -->
            </md-card-header-text>
          </md-card-header>
          <img ng-src="./images/product.png" class="md-card-image" alt="Productos">
          <md-card-actions layout="row" layout-align="center">
            <md-card-icon-actions ng-if="$ctrl.can('product.config')">
              <md-button class="md-fab md-mini md-accent hue-1" ng-click="$ctrl.on()">
                <md-icon md-font-set="material-icons">settings</md-icon>
                <md-tooltip md-direction="top">
                  Gestion
                </md-tooltip>
              </md-button>
            </md-card-icon-actions>
            <md-button class="md-raised md-primary" ng-if="!$ctrl.can('product.group_requested')" ui-sref="requestIndividual">Solicitar</md-button>
            <md-button class="md-raised md-primary" ng-if="$ctrl.can('product.group_requested')" ng-click="$ctrl.showDialog($event)">Solicitar</md-button>
            <md-button class="md-primary">Entregar</md-button>
          </md-card-actions>
        </md-card>

        <md-card flex-xs="98" flex-gt-xs="50" flex-lg="30" flex-xl="30" ng-if="$ctrl.can('security')">
          <md-card-header>
            <md-card-header-text>
              <span class="md-title">Seguridad</span>
              <!-- <span class="md-subhead">Material</span> -->
            </md-card-header-text>
          </md-card-header>
          <img ng-src="./images/security.jpg" class="md-card-image" alt="Seguridad">
          <md-card-actions layout="row" layout-align="center">
            <md-card-icon-actions ng-if="!$ctrl.can('security.config')">
              <md-button class="md-fab md-mini md-accent md-hue-3" ng-click="$ctrl.on()">
                <md-icon md-font-set="material-icons">settings</md-icon>
                <md-tooltip md-direction="top">
                  Gestion
                </md-tooltip>
              </md-button>
            </md-card-icon-actions>
            <md-button class="md-raised md-primary">Entrar</md-button>
          </md-card-actions>
        </md-card>
      </div>
      <!-- <div layout="column" layout-align="center center">
        <h2 ng-if="$ctrl.can('config')">Puedes ver esto por que tienes el permiso de configuracion</h2>
        <h2 ng-if="$ctrl.can('security')">Puedes ver esto por que tienes el permiso de seguridad</h2>
        <h1>Hola mundo home</h1>
        <br>
        <button ng-click="$ctrl.boton1()">Bonton 1</button>
        <button ng-click="$ctrl.onLogout()">Cerrar Sesión</button>
      </div> -->
    `,
 };