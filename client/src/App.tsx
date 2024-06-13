import React from 'react';
import FeedbackForm from './component/FeedbackForm';
import FeedbackList from './component/FeedbackList';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './component/HomePage';
import "./App.css"


const App: React.FC = () => {
    return (
        <div className="container p-5 text-color background mt-5 mb-5 shadow rounded">
            <div className=" d-flex justify-content-center ">
            <HomePage/>
            </div>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default App;
