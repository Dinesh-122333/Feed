import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/feedback', { name, feedback });
            setName('');
            setFeedback('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Feedback</label>
                <textarea 
                    className="form-control" 
                    id="feedback" 
                    rows={3} 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    required 
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default FeedbackForm;
