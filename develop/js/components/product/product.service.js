class RequestGroupService {  
  constructor ($http, ResourcesUrl) {
    this.$http = $http;
    this.ResourcesUrl = ResourcesUrl;
  }

  getComboList() {
    return this.$http.post(`${this.ResourcesUrl.api}product/combo/list`).then(response => response.data);
  }

  getStaffList() {

    return [{
      "identification": "22264601",
      "name": 'Oscar Yhonnerry Guevara Siano',
      "unit_cost": "Unidad de Técnologia de la Informacíon",
      "combo_list": [
        {
          "name": "Combo Embutidos",
          "type_combo": "1",
          "period": "01/01/2016 - 15/01/2016",
          "max": 1,
          "buy": false,
          "content": [
            {
              "name": "Tipo A",
              "type_combo": "2",
              "products": [
                {
                  "name": "Salchicha de Cerdo 50 Unidades",
                  "price": "78.912.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "salchicha_carne.png"
                },
                {
                  "name": "Salchicha de Pollo 45 Unidades",
                  "price": "78.912.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "salchicha_pollo.png"
                },
                {
                  "name": "Jamón de Pavo",
                  "price": "78.912.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "jamon_pavo.png"
                },
              ]
            },
            {
              "name": "Tipo B",
              "type_combo": "2",
              "products": [
                {
                  "name": "Salchicha de Cerdo 28 Unidades",
                  "price": "32.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "salchicha_carne.png"
                },
                {
                  "name": "Salchicha de Pollo 12 Unidades",
                  "price": "32.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "salchicha_pollo.png"
                },
                {
                  "name": "Jamón de Cerdo",
                  "price": "32.347,89",
                  "quantity": 1,
                  "unity": "Unidad",
                  "image": "jamon_cerdo.png"
                },
              ]
            },
          ],
        },
        {
          "name": "Combo Leche",
          "type_combo": "3",
          "period": "10/01/2016 - 25/01/2016",
          "max": 2,
          "buy": false,
          "products": [
            {
              "name": "Leche Completa",
              "price": "32.347,89",
              "quantity": 1,
              "unity": "Caja",
              "image": "leche_completa.png"
            },
            {
              "name": "Leche Descremada",
              "price": "32.347,89",
              "quantity": 1,
              "unity": "Caja",
              "image": "leche_descremada.png"
            },
            {
              "name": "Leche Deslactosada",
              "price": "32.347,89",
              "quantity": 1,
              "unity": "Caja",
              "image": "leche_deslactosada.png"
            },
            {
              "name": "Leche Descremada Deslactosada",
              "price": "32.347,89",
              "quantity": 1,
              "unity": "Caja",
              "image": "leche_descremada_deslactosada.png"
            },
          ],
        }
      ]
    }];
  }
}

RequestGroupService.$inject = ['$http', 'ResourcesUrl'];

export default RequestGroupService;