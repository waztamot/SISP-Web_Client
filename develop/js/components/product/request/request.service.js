class RequestService {  
  constructor ($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
  }

  individualSave(request) {
    console.log(request);
    // return this.$http.post(`${this.ResourcesUrl.api}product/combo/list`).then(response => response.data);
  }

}

RequestService.$inject = ['$http', 'ResourcesUrl'];

export default RequestService;