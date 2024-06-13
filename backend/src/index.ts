import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import feedbackRouter from './router/feedback';

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/api/feedback', feedbackRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
