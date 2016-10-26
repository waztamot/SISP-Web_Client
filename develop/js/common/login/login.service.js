class LoginService {  
  constructor($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
    this.getUser;
    this.getPermissions;
  }

  getUser() {
    return this.$http.post(`${this.ResourcesUrl.api}auth/user`).then(response => response.data);
  }

  getPermissions() {
    return this.$http.post(`${this.ResourcesUrl.api}auth/permissions`).then(response => response.data);
  }
}

LoginService.$inject = ['$http', 'ResourcesUrl'];

export default LoginService;
