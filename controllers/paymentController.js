// paymentController.js
const axios = require("axios");

const gatewayBackendUrl =
  "https://restaurant-api.taco5k.site/api/admin/gatewayintegration/payment";
const processPayment = async (req, res) => {
  try {
    const {
      items,
      amount,
      merchantSecretId,
      expiresAfterMinutes,
      redirectUrl,
    } = req.body;

    if (
      !items ||
      !amount ||
      items.length === 0 ||
      amount <= 0 ||
      !merchantSecretId ||
      !redirectUrl
    ) {
      return res.status(400).send("Invalid request: Missing items or amount");
    }

    const paymentData = {
      items,
      amount,
      merchantSecretId,
      expiresAfterMinutes,
      redirectUrl,
    };

    console.log("Payment Data:", paymentData);

    // Send payment data to the payment gateway
    const response = await axios.post(gatewayBackendUrl, paymentData);
    const data = response.data;
    console.log("Gateway Response:", data);

    res.json({ data });
  } catch (error) {
    console.error("Error processing payment:", error.msg);
    res.status(500).send("Internal Server Error");
  }
};

const getPaymentStatus = async (req, res) => {
  try {
    // Implement logic to get payment status here
    res.send("Get payment status");
  } catch (error) {
    console.error("Error getting payment status:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { processPayment };
