// paymentRoutes.js

const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/", paymentController.getPaymentStatus);
router.post("/", paymentController.processPayment);
router.delete("/:id", paymentController.refundPayment);
router.get("/transactions", paymentController.listTransactions);
router.get("/:id", paymentController.getPaymentStatus);
router.put("/:id", paymentController.processPayment);

module.exports = router;
