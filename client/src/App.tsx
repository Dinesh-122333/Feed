import React from 'react';
import FeedbackForm from './component/FeedbackForm';
import FeedbackList from './component/FeedbackList';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/HomePage';



const App: React.FC = () => {
    return (
        <div className="container mt-5">
            <HomePage/>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default App;
