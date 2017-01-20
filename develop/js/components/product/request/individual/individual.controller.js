class RequestIndividualController {
  constructor($state, $mdDialog, alertify, AclService) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
    // console.log(JSON.stringify(this.combos));
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  cancel() {
    this.$mdDialog.cancel();
  };

  test() {
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

RequestIndividualController.$inject = ['$state', '$mdDialog', 'alertify', 'AclService'];

export default RequestIndividualController;