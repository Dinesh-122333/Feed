import express from 'express';
import { getAllFeedback, submitFeedback } from '../controller/feedbackController';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Received GET request');
    getAllFeedback(req, res);
});

router.post('/', (req, res) => {
    console.log('Received POST request with body:', req.body);
    submitFeedback(req, res);
});

export default router;
