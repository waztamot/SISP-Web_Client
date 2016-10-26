class HomeController {
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

HomeController.$inject = ['$rootScope', '$state', '$auth', 'AclService', 'HomeService'];
console.log('cargo home controller')

export default HomeController;