const api = require("../services/api");

const paymentController = {
    getPaymentBatch: async (_, res) => {
        try {
            const response = await api.get('sap/enviaLote');
            return res.json(response.data);
        } catch(e) {
            console.log('error', e.message);
            return res.status(500).json('There was an error processing the request');
        } 
    },
    postPaymentBatch: async (req, res) => {
        try {
            const payload = req.body;
            const response = await api.post('sap/confirmaPagto', payload);
    
            return res.json(response.data);
        } catch(e) {
            console.log('error', e.response.data.errors);
            return res.status(500).json('There was an error processing the request');
        } 
    },
    postReceiveBatch: async (req, res) => {
        try {
            const payload = req.body;
            const response = await api.post('banco/recebeLote', payload);
    
            return res.json(e.response.data.errors);
        } catch(e) {
            console.log('error', e.response);
            return res.status(500).json('There was an error processing the request');
        } 
    },
    postCheckPaymentProcessing: async (req, res) => {
        try {
            const payload = req.body;
            const response = await api.post('banco/verificaProcessamento', payload);
    
            return res.json(response.data);
        } catch(e) {
            console.log('error', e.response.data.errors);
            return res.status(500).json('There was an error processing the request');
        } 
    }
}

module.exports = paymentController;