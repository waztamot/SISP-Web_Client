class ComboSubGroupStatictController {
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

      for (let i in this.combo.details) {
        this.combo.details[i].price = 0;

        for(let y in this.combo.details[i].details) {
          this.combo.details[i].price += (
            parseInt(this.combo.details[i].details[y].quantity) * parseFloat(this.combo.details[i].details[y].product.price.price)
          );
         
          if (this.combo.buy) {
            this.data.quantity = this.combo.max_quantity;
            this.data.requisition.id = this.combo.requisition_id;
            if (this.combo.details[i].quantity) {
              this.data.total += (
                parseInt(this.combo.details[i].details[y].quantity) * parseFloat(this.combo.details[i].details[y].product.price.price)
              );
            }
          } else {
            for (let i in this.combo.details) {
              this.combo.details[i].quantity = 0;
            }
          }

        }
      }


    this.button = {
      submit: this.combo.buy,
      cancel: !this.combo.buy,
    };
  } // end $onInit()

  can(ability) {
    return this.AclService.can(ability);
  }

  add($i) {
    if (this.data.quantity < this.combo.max_quantity) {
      this.combo.details[$i].quantity++;
      this.data.quantity++;
      this.data.total += parseFloat(this.combo.details[$i].price);
    }
  }

  subtract($i) {
    if (this.combo.details[$i].quantity > 0) {
      this.combo.details[$i].quantity--;
      this.data.quantity--;
      this.data.total -= parseFloat(this.combo.details[$i].price);
      (this.data.total < 1) ? this.data.total = 0 : this.data.total;
    }
  }

  cancel() {
    this.$mdDialog.cancel();
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
      if (this.combo.details[i].quantity > 0) {
        request.combo_child_id = this.combo.details[i].id;

        for (let y in this.combo.details[i].details) {
          request.products.push({
            id: this.combo.details[i].details[y].product.id,
            quantity: this.combo.details[i].details[y].quantity,
            unity: this.combo.details[i].details[y].unity,
          });
        }
      }
    }

    console.log(request)
    // console.log(JSON.stringify(request))

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
              this.button.submit = false;
            }
          }
        } else {
          this.alertify.error('Error interno en el servidor');
          this.button.submit = false;
        };
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

  showDialog(ev) {
    this.$mdDialog.show({
      controller: ($scope, $mdDialog) => {
        $scope.close = () => {
          $mdDialog.cancel();
        };
      },
      templateUrl: 'typeSolicitude.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
    });
  };

}

ComboSubGroupStatictController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService', 'RequestIndividualService'];

export default ComboSubGroupStatictController;