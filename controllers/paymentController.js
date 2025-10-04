// paymentController.js
const axios = require("axios");

const gatewayBackendUrl =
  "https://restaurant-api.taco5k.site/api/admin/gatewayintegration/payment";
const processPayment = async (req, res) => {
  const url =
    "https://restaurant-api.taco5k.site/api/admin/gatewayintegration/payment";

  console.log("Request Body:", req.body);

  // const data = {
  //   merchantSecretId: "c85db23f-6192-4728-8d57-5717af04e268",
  //   amount: 0,
  //   expiresAfterMinutes: 0,
  //   redirectUrl: "string",
  //   items: [
  //     {
  //       id: 0,
  //       title: "string",
  //       imageUrl: 0,
  //       price: 0,
  //     },
  //   ],
  // };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...req.body,
        items: [
          {
            id: 1,
            title: "Test Item",
            imageUrl: "http://example.com/image.png",
            price: 100,
          },
        ],
      }),
    });
    const json = await response.json();
    console.log("Response from Payment Gateway:", json);

    res.send(json);
  } catch (err) {
    if (err) {
      // Something else happened
      console.error("❌ Request setup error:", err.message);
    }
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
