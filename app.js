const express = require('express');
const paymentController = require('./src/controllers/paymentController');
const app = express();
const PORT = 3003;

const { getPaymentBatch, postPaymentBatch } = paymentController;

app.use(express.json());

app.get('/', (_, res) => res.send('server is running...'));

app.get('/payments-batch', getPaymentBatch);
app.post('/payment-batch', postPaymentBatch);

app.listen(3003, () => console.log(`server is listening on port ${PORT}`));