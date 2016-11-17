import GroupController from './group.controller';
/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const GroupComponent = {
  bindings: {
    combos: '<',
    staff: '<',
  },
  controller: GroupController,
  // template: `<h1>hola módulo de solicitud de productos grupal al mundo cruel </h1>`,
  templateUrl: './templates/components/requestGroup.html',
};
