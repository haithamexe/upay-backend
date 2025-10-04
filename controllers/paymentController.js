// paymentController.js

exports.processPayment = (req, res) => {
  res.send("Process payment");
};

exports.getPaymentStatus = (req, res) => {
  res.send("Get payment status");
};

exports.refundPayment = (req, res) => {
  res.send("Refund payment");
};

exports.listTransactions = (req, res) => {
  res.send("List transactions");
};
