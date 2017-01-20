class ComboStatictController {
  constructor($state, $mdDialog, Alertify, AclService, RequestService) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = Alertify;
    this.AclService = AclService;
    this.requestService = RequestService;
  }

  $onInit() {
    this.data = {
      quantity: 0,
      total: 0.00,
      requisition: {
        id: null,
      }
    };

    if (this.combo.buy) {
      this.data.quantity = this.combo.max_quantity;
      this.data.requisition.id = this.combo.requisition_id;
    }

    for (let i in this.combo.details) {
      this.data.total += (
        parseInt(this.combo.details[i].quantity) * parseFloat(this.combo.details[i].product.price.price)
      );
    }

    this.button = {
      submit: this.combo.buy,
      cancel: !this.combo.buy,
    };
  } // end $onInit()

  can(ability) {
    return this.AclService.can(ability);
  }

  onSubmit() {
    this.button.submit = true;

    let request = {
      type_combo: this.combo.type,
      combo_id: this.combo.id,
      lapse_id: this.combo.lapse.id,
      quantity: this.combo.max_quantity,
      products: [],
    }

    for (let i in this.combo.details) {
      request.products.push({
        id: this.combo.details[i].product.id,
        quantity: this.combo.details[i].quantity,
        unity: this.combo.details[i].unity,
      });
    }
    
    console.log(JSON.stringify(request))

    this.requestService.save(request)
      .then((response) => {
        if (response.result) {
          this.combo.buy = response.result;
          this.data.requisition.id = response.data.id;
          this.data.quantity = this.combo.max_quantity;
          this.button.cancel = false;
          this.alertify.success('Solicitud realizada');
        } else {
          this.combo.buy = response.result;
          this.button.submit = false;
          this.alertify.error(response.message);
        }
      })
      .catch((fails) => {
        if (fails.status != 500) {
          for (let firstKey in fails.data) {
            for (let secondKey in fails.data[firstKey]) {
              this.alertify.error(fails.data[firstKey][secondKey]);
            }
          }
        } else {
          this.alertify.error('Error interno en el servidor');
        };
        this.button.submit = false;
      });
  } // end onSubmit()

  onCancel() {
    this.requestService.delete(this.data.requisition.id)
      .then((response) => {
        if (response.result) {
          this.combo.buy = !response.result;
          this.$onInit();
          this.alertify.success('Solicitud cancelada');
        } else {
          this.$onInit();
          this.alertify.error(response.message);
        }
      })
      .catch((fails) => {
        if (fails.status != 500) {
          for (let firstKey in fails.data) {
            for (let secondKey in fails.data[firstKey]) {
              this.alertify.error(fails.data[firstKey][secondKey]);
            }
          }
        } else {
          this.button.submit = true;
          this.alertify.error('Error interno en el servidor');
        };
      });

  } // end onCancel()

}

ComboStatictController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService', 'RequestIndividualService'];

export default ComboStatictController;