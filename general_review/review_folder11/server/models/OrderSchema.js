const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderID: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  itemQuantity: {
    type: Number,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
