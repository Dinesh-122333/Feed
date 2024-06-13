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

 
        const handleRefresh = () => {
            window.location.reload(); // Reloads the current page
        };

    return (
        <div>
            <span className=' card-border-color'></span>
            <hr style={{ width: '100%', margin: '20px auto', border: '1px solid  rgb(204, 117, 255)' }} />
            <div className="d-flex justify-content-center p-5">
            <h2 className='primary-color h1'>Feedback List</h2>
            </div>
            
            {error ? (
                <div className="alert alert-danger">{error}</div>
            ) : (
                <ul className="list-group ">
                    {feedbackList.map((feedback, index) => (
                        <li key={index} className="list-group-item card-border-color bg-dark text-white">
                            <h5>{feedback.name}</h5>
                            <p>{feedback.feedback}</p>
                        </li>
                    ))}
                </ul>
            )}
             <div>
                <div className="d-flex justify-content-center p-5">
                    <button onClick={handleRefresh} className="button rounded-pill px-3 py-2 ">check your feed</button>
                </div>
                </div>
            
        </div>
    );
};

export default FeedbackList;
