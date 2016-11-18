class ComboDinamicController {
  constructor($state, $mdDialog, alertify, AclService) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
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

  cancel() {
    this.$mdDialog.cancel();
  };

  test() {
    this.alertify.success('Compra realizada');
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

ComboDinamicController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService'];

export default ComboDinamicController;