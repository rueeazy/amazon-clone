/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_API_KEY);

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello, world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-36ea8/us-central1/api
