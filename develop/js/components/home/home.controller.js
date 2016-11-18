class HomeController {
  constructor($state, $auth, $mdDialog, alertify, AclService, HomeService) {
    this.$state = $state;
    this.$auth = $auth;
    this.$mdDialog = $mdDialog;
    this.alertify = alertify;
    this.AclService = AclService;
    this.HomeService = HomeService
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  cancel() {
    this.$mdDialog.cancel();
  };

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
      // fullscreen: true // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
    });
  };

  boton1() {
    console.log('Aja1');
    this.HomeService.test();
  }

  onLogout() {
    console.log('Aja2');
    this.$auth.logout();
    sessionStorage.removeItem('AclService');
    sessionStorage.removeItem('user');
    this.$rootScope.authenticated = false;
    this.$rootScope.currentUser = null;
    this.$rootScope.currentAcl = null;
    
    this.$state.transitionTo('login', { 
      reload: true, inherit: false, notify: false 
    });
  }

}

HomeController.$inject = ['$state', '$auth', '$mdDialog', 'alertify', 'AclService', 'HomeService'];

export default HomeController;