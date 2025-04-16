// @ts-nocheck

/* 
Refactor below code for 

1- Improve efficiency.
2- Make it more readable and maintainable.
3- Handle potential errors in data (e.g., negative stock).
4- Separate the logic into more modular and reusable functions.
5- Utilize ES6+ features where appropriate.

*/

export function handleEcommerceData(data) {
  var products = data.products;
  var orders = data.orders;
  var shipments = data.shipments;

  var finalData = {};

  for (var i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      finalData[products[i].id] = {
        name: products[i].name,
        price: products[i].price,
        stock: products[i].stock,
      };
    }
  }

  for (var j = 0; j < orders.length; j++) {
    var order = orders[j];
    if (finalData[order.productId]) {
      var productData = finalData[order.productId];
      productData.stock -= order.quantity;
      if (!productData.orders) productData.orders = [];
      productData.orders.push(order.orderId);
    }
  }

  for (var k = 0; k < shipments.length; k++) {
    var shipment = shipments[k];
    if (finalData[shipment.productId]) {
      var productDataForShipment = finalData[shipment.productId];
      productDataForShipment.stock += shipment.quantity;
      if (!productDataForShipment.shipments)
        productDataForShipment.shipments = [];
      productDataForShipment.shipments.push(shipment.shipmentId);
    }
  }

  var outOfStockProducts = [];
  for (var productId in finalData) {
    if (finalData[productId].stock <= 0) {
      outOfStockProducts.push(productId);
    }
  }

  for (var l = 0; l < outOfStockProducts.length; l++) {
    delete finalData[outOfStockProducts[l]];
  }

  return finalData;
}
