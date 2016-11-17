import LoginController from './login.controller';

export const LoginComponent = {
  controller: LoginController,
  template: `
    <div layout="column" layout-fill layout-align="center center">
      <md-card style="width: 300px;">
        <img ng-src="/images/logo.png" class="md-card-image" alt="Organización El Tunal">
        <md-card-title>
          <md-card-title-text>
            <span class="md-headline align-center">Iniciar Sesión</span>
          </md-card-title-text>
        </md-card-title>
        <form ng-submit="$ctrl.onSubmit()">
          <md-card-content layout="row">
            <md-input-container>
              <label>Cédula</label>
              <input ng-model="$ctrl.user.identification" type="text" required>
            </md-input-container>
            <md-input-container>
              <label>Contraseña</label>
              <input ng-model="$ctrl.user.password" type="password" required>
            </md-input-container>
          </md-card-content>
          <md-card-actions layout="row" layout-align="center center">
            <md-button class="md-primary md-raised md-hue-4" type="submit">Iniciar</md-button>
          </md-card-actions>
        </form>
      </md-card>
    </div>
  `,
};