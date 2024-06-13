import { Request, Response } from 'express';
import { FeedbackService } from '../services/feedbackService';

const feedbackService = new FeedbackService();

export const getAllFeedback = (req: Request, res: Response) => {
    console.log('Executing getAllFeedback');
    const feedback = feedbackService.getAllFeedback();
    res.json(feedback);
};

export const submitFeedback = (req: Request, res: Response) => {
    console.log('Executing submitFeedback with data:', req.body);
    const { name, feedback } = req.body;
    if (!name || !feedback) {
        console.log('Invalid input:', req.body);
        return res.status(400).json({ message: 'Name and feedback are required' });
    }

    feedbackService.addFeedback({ name, feedback });
    res.status(201).json({ message: 'Feedback submitted successfully' });
};
