class ComboStatictController {
  constructor($state, $mdDialog, alertify, AclService, Combo) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
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
      this.data.total += (parseInt(this.combo.details[key].quantity) * parseFloat(this.combo.details[key].product.price.price));
    }
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  /*onSelect(check, price) {
    if (check) {
      this.data.quantity++;
      this.data.total += parseFloat(price);
    } else {
      this.data.quantity--;
      this.data.total -= parseFloat(price);
    }
  }*/

  onSubmit() {
    if (this.data.quantity) {
      this.combo.buy = true;
      this.alertify.success('Pedido realizado');
    } else {
      this.alertify.error('Debe seleccionar una opción');
    }
  }

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

ComboStatictController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService'];

export default ComboStatictController;