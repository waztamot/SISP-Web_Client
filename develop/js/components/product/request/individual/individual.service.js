class RequestIndividualService {  
  constructor ($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
  }

  save(request) {
    return this.$http.post(`${this.ResourcesUrl.api}product/requisition/individual/`, request).then(response => response.data);
  }

  getRequisition() {
    return this.$http.post(`${this.ResourcesUrl.api}product/requisition/individual/`).then(response => response.data);
  }

  delete(id) {
    return this.$http.delete(`${this.ResourcesUrl.api}product/requisition/individual/${id}`).then(response => response.data);
  }

}

RequestIndividualService.$inject = ['$http', 'ResourcesUrl'];

export default RequestIndividualService;