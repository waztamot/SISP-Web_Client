class RequestGroupService {  
  constructor ($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
  }

  save(request) {
    return this.$http.post(`${this.ResourcesUrl.api}product/requisition/group/`, request).then(response => response.data);
  }

  getRequisition() {
    return this.$http.post(`${this.ResourcesUrl.api}product/requisition/group/`).then(response => response.data);
  }

  delete(id) {
    return this.$http.delete(`${this.ResourcesUrl.api}product/requisition/group/`, id).then(response => response.data);
  }

}

RequestGroupService.$inject = ['$http', 'ResourcesUrl'];

export default RequestGroupService;