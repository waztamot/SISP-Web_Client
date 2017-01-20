class DeliveryController {
  constructor($state, $mdDialog, alertify, AclService, DeliveryService) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
    this.DeliveryService = DeliveryService;
  }

  $onInit() {
    this.combos = null;
    this.employee = null;
    this.requisitions = null;
    this.selected = new Array();

    this.delivery = {
      type: 'Individual',
    }
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  onDeliver(model) {
    if (model) {
      this.delivery.type = 'Grupal';
    } else {
      this.delivery.type = 'Individual';
    }
  }

  search(ev) {
    var confirm = this.$mdDialog.prompt()
      .title('Buscar')
      .textContent('Por favor ingrese la cédula de la persona.')
      .placeholder('Cédula')
      .ariaLabel('Cédula')
      .initialValue('')
      .targetEvent(ev)
      .ok('Aceptar')
      .cancel('Cancelar');

    this.$mdDialog.show(confirm)
    .then((result) => {
      if (result) {
        console.log('Ok ' + result + '.');

        this.DeliveryService.getRequisition({identification: result})
        .then((response) => {
          if (response.result) {
            console.log(response)
            this.combos = response.combos;
            this.employee = response.employee;
            this.requisitions = response.requisitions;
          }
        })
        .catch(() => {

        });
      }
    })
    .catch(() => {
      console.log('Cancelo');
    });
  };

  toggleCheckbox(item) {
    let idx = this.selected.indexOf(item);
    if (idx > -1) {
      this.selected.splice(idx, 1);
    }
    else {
      this.selected.push(item);
    }
  };

  save(requisition_id) {
    let data = {
      identification: this.employee.identification,
      requisition_id: requisition_id,
      products: [],
    }

    for (let i in this.requisitions) {
      for(let y in this.requisitions[i].details) {

        if (this.requisitions[i].details[y].requisition_id == requisition_id) {
          data.products.push({
            id: this.requisitions[i].details[y].product_id,
            quantity: this.requisitions[i].details[y].quantity,
            unity: this.requisitions[i].details[y].unity,
          });

          data.combo_id = this.requisitions[i].details[y].combo_id;
          data.type_combo = this.requisitions[i].details[y].combo.type;
        }
      }
    }

    console.log(JSON.stringify(data))

    this.DeliveryService.save(data)
      .then((response) => {
          console.log(response)
        if (response.result) {
        }
      })
      .catch(() => {
        console.log('error deliver save')
      });
  }

  count(quantity) {
    if (quantity > 0) {
      return true;
    }
    return false;
  }

  exists(item) {
    return selected.indexOf(item) > -1;
  };

  validateProduct(ev) {
    if (this.selected.length) {
      this.$mdDialog.show({
        controller: ($scope, $mdDialog, combos, requisition, selected) => {
          $scope.combos = combos;
          $scope.requisition = requisition;
          // $scope.selected = selected;

          $scope.close = () => {
            $mdDialog.cancel();
          };

          $scope.count = (quantity) => {
            if (quantity > 0) {
              return true;
            }
            return false;
          }

          $scope.exists = (item) => {
            return selected.indexOf(item) > -1;
          };
        },
        templateUrl: 'validateQuantityProduct.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true, // Only for -xs, -sm breakpoints.
        resolve: {
          combos: () => {
            return this.combos;
          },
          requisition: () => {
            return this.requisition;
          },
          selected: () => {
            return this.selected;
          },
        }
      })
      .then(function(answer) {
        // $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        // $scope.status = 'You cancelled the dialog.';
      });
    } else {
      this.alertify.log('Debe selecionar un combo');
    }
  }

}

DeliveryController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService', 'DeliveryService'];

export default DeliveryController;