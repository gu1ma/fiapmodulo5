import express from 'express';
const app = express();
const PORT = 3003;

app.get('', (_, res) => res.send('server is running...'));

app.listen(3003, () => console.log(`server is listening on port ${PORT}`));