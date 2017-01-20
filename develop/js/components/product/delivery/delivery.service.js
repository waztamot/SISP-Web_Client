class DeliveryService {  
  constructor ($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
  }

  save(request) {
    return this.$http.post(`${this.ResourcesUrl.api}product/delivery/individual/`, request).then(response => response.data);
  }

  getRequisition(request) {
    return this.$http.post(`${this.ResourcesUrl.api}product/delivery/individual/requisitions/`, request).then(response => response.data);
  }

  delete(id) {
    return this.$http.delete(`${this.ResourcesUrl.api}product/delivery/individual/${id}`).then(response => response.data);
  }

}

DeliveryService.$inject = ['$http', 'ResourcesUrl'];

export default DeliveryService;