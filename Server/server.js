const express = require('express');
const stripe = require('stripe')(
  'sk_test_51OuWnzSCOBjelIMMJ0bMC1NiWBKaaQOPYXPO7sk4s1aegmuQsrRy9sEpjB5qvmXDsWxJFevrYPxoWjCzzTuEbY2500kbzHAz10',
); 
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, 
      currency: 'usd', 
      payment_method_types: ['card'],
      metadata: {integration_check: 'accept_a_payment'},
    });

    res.json({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({error: 'Error processing payment'});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
