/**
 * app.component.js
 *
 * Root component that defines the base element for the entire application
 */

export const AppComponent = {
  template: `
    <div layout="column" layout-fill>
      <s-header></s-header>
      <md-content flex layout-padding ui-view>
      </md-content>
    </div>
  `,
};