class ComboStatictController {
  constructor($state, $mdDialog, alertify, AclService, RequestService) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
    this.requestService = RequestService;
    this.data;
  }

  $onInit() {
    this.data = {
      buy: false,
      quantity: 0,
      total: 0.00,
    };

    this.data.quantity = this.combo.max_quantity;

    for (let key in this.combo.details) {
      this.data.total += (
        parseInt(this.combo.details[key].quantity) * parseFloat(this.combo.details[key].product.price.price)
      );
    }
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  onSubmit() {
    if (this.data.quantity) {

      let request = {
        type_combo: this.combo.type,
        combo_id: this.combo.id,
        quantity: this.data.quantity,

      }

      this.requestService.individualSave(request)
        .then((response) => {

        })
        .catch((fails) => {

        });

      this.combo.buy = true;
      this.alertify.success('Pedido realizado');
    } else {
      this.alertify.error('Debe seleccionar una opción');
    }
  }

}

ComboStatictController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService', 'RequestService'];

export default ComboStatictController;