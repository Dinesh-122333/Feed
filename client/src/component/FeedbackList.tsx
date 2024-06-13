import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Feedback {
    name: string;
    feedback: string;
}

const FeedbackList: React.FC = () => {
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching data...");
            try {
                const result = await axios.get('http://localhost:3001/api/feedback');
                console.log("Data fetched:", result.data);
                if (Array.isArray(result.data)) {
                    setFeedbackList(result.data);
                } else {
                    setError('Unexpected response format');
                }
            } catch (error) {
                setError('Error fetching data');
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when component mounts

    return (
        <div>
            <h2>Feedback List</h2>
            {error ? (
                <div className="alert alert-danger">{error}</div>
            ) : (
                <ul className="list-group">
                    {feedbackList.map((feedback, index) => (
                        <li key={index} className="list-group-item">
                            <h5>{feedback.name}</h5>
                            <p>{feedback.feedback}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FeedbackList;
