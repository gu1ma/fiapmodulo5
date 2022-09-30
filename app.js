const express = require('express');
const paymentController = require('./src/controllers/paymentController');
const app = express();
const PORT = 3003;

const { getPaymentBatch, postPaymentBatch, postCheckPaymentProcessing, postReceiveBatch } = paymentController;

app.use(express.json());

app.get('/', (_, res) => res.send('server is running...'));

app.get('/payments-batch', getPaymentBatch);
app.post('/payment-batch', postPaymentBatch);
app.post('/receive-batch', postReceiveBatch);
app.post('/check-payment-processing', postCheckPaymentProcessing);

app.listen(3003, () => console.log(`server is listening on port ${PORT}`));