class HeaderController {
  constructor($rootScope, $state, $auth, AclService, HomeService) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$auth = $auth;
    this.AclService = AclService;
    this.HomeService = HomeService
  }

  can(ability) {
    return this.AclService.can(ability);
  }

  onLogout() {
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

HeaderController.$inject = ['$rootScope', '$state', '$auth', 'AclService', 'HomeService'];
console.log('cargo header controller')

export default HeaderController;