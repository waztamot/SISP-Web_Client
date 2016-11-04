import IndividualController from './individual.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const IndividualComponent = {
  /*bindings: {
    speakers: '<'
  },*/
  controller: IndividualController,
  template: `
    <div layout="row" layout-align="space-around center" layout-wrap>
      <md-whiteframe class="md-whiteframe-6dp" flex="100" flex-gt-sm="80" flex-gt-md="75" layout layout-align="center center">
        <md-tabs md-dynamic-height md-border-bottom flex="100">
          <md-tab label="Combo de Embutidos">
            <md-content class="md-padding">
              <div layout="row" layout-align="space-around">
                <p>Cantidad: 1</p>
                <p>Total Bs.: 1 </p>
              </div>
              <fieldset class="list-product">
                <legend>Lista de productos</legend>
                <md-list>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/mortadela_de_pollo.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Jamon Alimex</h3>
                      <h4>1 Unidad</h4>
                      <p>Precio: 51.564 Bs.</p>
                    </div>
                    <md-divider></md-divider>
                  </md-list-item>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/mortadela_de_carne.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Mortadela de Carne Alimex</h3>
                      <h4>1 Unidad</h4>
                      <p>Precio: 51.564 Bs.</p>
                    </div>
                    <md-divider></md-divider>
                  </md-list-item>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/mortadela_de_pollo.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Mortadela de Pollo Alimex</h3>
                      <h4>1 Unidad</h4>
                      <p>Precio: 51.564 Bs.</p>
                    </div>
                    <md-divider></md-divider>
                  </md-list-item>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/mortadela_de_carne.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Salchicha de Cerdo Alimex</h3>
                      <h4>1 Unidad</h4>
                      <p>Precio: 51.564 Bs.</p>
                    </div>
                    <md-divider></md-divider>
                  </md-list-item>
                  <md-list-item class="md-2-line" ng-click="null">
                    <img ng-src="./images/mortadela_de_pollo.jpg" class="md-avatar" alt=""/>
                    <div class="md-list-item-text">
                      <h3>Salchicha de Pollo Alimex</h3>
                      <h4>1 Unidad</h4>
                      <p>Precio: 51.564 Bs.</p>
                    </div>
                  </md-list-item>
                </md-list>
              </fieldset>
              <div layout="row" layout-align="center center">
                <md-button class="md-primary md-raised" ng-click="$ctrl.test()">Comprar</md-button>
              </div>
            </md-content>
          </md-tab>
          <md-tab label="Combo de Leche">
            <md-content class="md-padding">
              <div layout="row" layout-align="space-around">
                <p>Cantidad: 1</p>
                <p>Total Bs.: 1,00</p>
              </div>
              <div layout="row" layout-align="space-around center" layout-wrap>
                <md-card flex="100" flex-lg="45" flex-xl="45">
                  <md-card-title>
                    <md-card-title-text>
                      <span class="md-headline">Leche Completa</span>
                      <span class="md-subhead">Precio por caja: 5.451.564 Bs.</span>
                    </md-card-title-text>
                  </md-card-title>
                  <md-card-content layout="row" layout-align="space-between">
                    <div class="md-media-xl">
                      <img ng-src="./images/completa.png" alt="Leche Completa" width="100%"/>
                    </div>
                    <md-card-actions layout="column">
                      <md-button class="md-icon-button" aria-label="Sumar">
                        <md-icon md-font-set="material-icons">add</md-icon>
                      </md-button>
                      <p class="align-center">0</p>
                      <md-button class="md-icon-button" aria-label="Restar">
                        <md-icon md-font-set="material-icons">remove</md-icon>
                      </md-button>
                    </md-card-actions>
                  </md-card-content>
                </md-card>
                <md-card flex="100" flex-lg="45" flex-xl="45">
                  <md-card-title>
                    <md-card-title-text>
                      <span class="md-headline">Leche Descremada</span>
                      <span class="md-subhead">Precio por caja: 5.451.564 Bs.</span>
                    </md-card-title-text>
                  </md-card-title>
                  <md-card-content layout="row" layout-align="space-between">
                    <div class="md-media-xl">
                      <img ng-src="./images/descremada.png" alt="Leche Descremada" width="100%"/>
                    </div>
                    <md-card-actions layout="column">
                      <md-button class="md-icon-button" aria-label="Sumar">
                        <md-icon md-font-set="material-icons">add</md-icon>
                      </md-button>
                      <p class="align-center">0</p>
                      <md-button class="md-icon-button" aria-label="Restar">
                        <md-icon md-font-set="material-icons">remove</md-icon>
                      </md-button>
                    </md-card-actions>
                  </md-card-content>
                </md-card>
                <md-card flex="100" flex-lg="45" flex-xl="45">
                  <md-card-title>
                    <md-card-title-text>
                      <span class="md-headline">Leche Deslactosada</span>
                      <span class="md-subhead">Precio por caja: 5.451.564 Bs.</span>
                    </md-card-title-text>
                  </md-card-title>
                  <md-card-content layout="row" layout-align="space-between">
                    <div class="md-media-xl">
                      <img ng-src="./images/deslactosada.png" alt="Leche Deslactosada" width="100%"/>
                    </div>
                    <md-card-actions layout="column">
                      <md-button class="md-icon-button" aria-label="Sumar">
                        <md-icon md-font-set="material-icons">add</md-icon>
                      </md-button>
                      <p class="align-center">0</p>
                      <md-button class="md-icon-button" aria-label="Restar">
                        <md-icon md-font-set="material-icons">remove</md-icon>
                      </md-button>
                    </md-card-actions>
                  </md-card-content>
                </md-card>
                <md-card flex="100" flex-lg="45" flex-xl="45">
                  <md-card-title>
                    <md-card-title-text>
                      <span class="md-headline">Leche Descremada Deslactosada</span>
                      <span class="md-subhead">Precio por caja: 5.451.564 Bs.</span>
                    </md-card-title-text>
                  </md-card-title>
                  <md-card-content layout="row" layout-align="space-between">
                    <div class="md-media-xl">
                      <img ng-src="./images/descremada_deslactosada.png" alt="Leche Descremada Desalactosada" width="100%"/>
                    </div>
                    <md-card-actions layout="column">
                      <md-button class="md-icon-button" aria-label="Sumar">
                        <md-icon md-font-set="material-icons">add</md-icon>
                      </md-button>
                      <p class="align-center">0</p>
                      <md-button class="md-icon-button" aria-label="Restar">
                        <md-icon md-font-set="material-icons">remove</md-icon>
                      </md-button>
                    </md-card-actions>
                  </md-card-content>
                </md-card>
              </div>
              <div layout="row" layout-align="center center">
                <md-button class="md-primary md-raised" ng-click="$ctrl.test()">Comprar</md-button>
              </div>
            </md-content>
          </md-tab>
          <md-tab label="Combo de Huevos">
            <md-content class="md-padding">
              <h1 class="md-display-2">Combo de Huevos</h1>
              <p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p>
            </md-content>
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </div>
    `,
};
