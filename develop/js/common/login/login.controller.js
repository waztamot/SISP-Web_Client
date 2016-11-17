class LoginController {  
  constructor($auth, $state, AclService, alertify, LoginService) {
    this.$auth = $auth;
    this.$state = $state;
    this.AclService = AclService;
    this.alertify = alertify;
    this.loginService = LoginService;
    this.user = {};
  }

  onSubmit() {
    let credentials = {
      identification: this.user.identification,
      password: this.user.password
    };
    
    // Use Satellizer's $auth service to login
    this.$auth.login(credentials)
      .then(() => {
        this.loginService.getUser()
        .then((response) => {
          // console.log(response)
          // Stringify the returned data to prepare it
          // to go into local storage
          let user = JSON.stringify(response.user);
          // Set the stringified user data into local storage
          sessionStorage.setItem('user', user);
          // The user's authenticated state gets flipped to
          // true so we can now show parts of the UI that rely
          // on the user being logged in
          let aclData = response.acl;
          let role = Object.keys(response.acl)[0];
          // console.log(role);
          this.AclService.setAbilities(aclData);
          this.AclService.attachRole(role);
          // Everything worked out so we can now redirect to
          // the users state to view the data
          this.$state.go('home');
        })
        .catch((fails) => {
          console.log(fails);
          this.alertify.error(fails.data.error);
          return false;
        })
      })
      .catch((fails) => {
        this.alertify.error(fails.data.error);
        console.log('Fallo el login');
        return false;
      })
  }

}

LoginController.$inject = ['$auth', '$state', 'AclService', 'alertify', 'LoginService'];

export default LoginController;