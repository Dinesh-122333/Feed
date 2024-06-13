import React from 'react';
import img from './images/titleimg.png';
import "./styles/styles.css"

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className='primary-color'>Simple Feedback Management System</h1>
                <img className="rounded w-50 my-4" src={img} alt="Title" />
                <p className="h5 secondary-color">
                    We value your feedback! 🌟 Your thoughts and suggestions help us improve and provide better services.
                    📝 Please take a moment to share your experience with us.
                    🙏 Your input is greatly appreciated and helps us make positive changes! 🚀
                    <br />
                    Thank you for your time and support! 😊
                </p>
            </div>
        </div>
    );
};

export default HomePage;


