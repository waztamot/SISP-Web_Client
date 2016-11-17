import HeaderController from './header.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const HeaderComponent = {
  /*bindings: {
    speakers: '<'
  },*/
  controller: HeaderController,
  // templateUrl: `./templates/common/header.html`,
  template: `
    <md-toolbar class="md-whiteframe-2dp Header">
      <div class="md-toolbar-tools">
        <md-button aria-label="Ir atrás" ng-show="false">
          <md-icon md-font-set="material-icons">arrow_back</md-icon>
          Ir Atrás
        </md-button>
        <a ui-sref="home" class="Header-logo">
          <img ng-src="/images/isotipo.png" alt="Organización El Tunal" width="100">
        </a>
        <span flex></span>
        <figure class="Header-avatar">
          <img ng-src="./images/avatar2.png" alt="A">
        </figure>
        <span class="Header-nameUser">{{$ctrl.currentUser.name}}</span>
        <md-menu  md-offset="50px" md-position-mode="target-right target">
          <md-button aria-label="Menu Usuario" class="md-icon-button" ng-click="$ctrl.openMenu($mdOpenMenu, $event)">
            <md-icon md-font-set="material-icons">more_vert</md-icon>
          </md-button>
          <md-menu-content width="2">
            <md-menu-item>
              <md-button ng-click="">
                <md-icon md-font-set="material-icons">vpn_key</md-icon>
                Cambiar Contraseña
              </md-button>
            </md-menu-item>
            <md-menu-divider></md-menu-divider>
            <md-menu-item>
              <md-button aria-label="Salir" ng-click="$ctrl.onLogout()">
                <md-icon md-font-set="material-icons">exit_to_app</md-icon>
                Salir
              </md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>
  `,
};
