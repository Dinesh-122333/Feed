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
        <>
        <hr style={{ width: '100%', margin: '20px auto', border: '1px solid  rgb(204, 117, 255)' }} />  
        <div className="d-flex justify-content-center p-5 primary-color">
            <h1>
                Form
            </h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label secondary-color h6">Name</label>
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
                <label htmlFor="feedback" className="form-label secondary-color h6">Feedback</label>
                <textarea 
                    className="form-control" 
                    id="feedback" 
                    rows={3} 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    required 
                ></textarea>
            </div>
            <div className="d-flex justify-content-center p-5">
            <button type="submit" className="button rounded-pill px-3 py-2 ">Submit</button>
            </div>
            
        </form>
        </>
        
    );
};

export default FeedbackForm;
