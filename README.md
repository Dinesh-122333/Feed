# Feed

## Technologies Used

1. **Frontend:** React.js, Axios for HTTP requests, Bootstrap for styling.
2. **Backend:** Express.js for API handling.

## Features

- **Feedback Form:** Allows users to submit their name and feedback.
- **Feedback List:** Displays all submitted feedback.
- **Responsive Design:** Ensures usability across different devices.

## Components and Modules

- **FeedbackForm:** Handles user input and submits feedback to the backend.
- **FeedbackList:** Fetches and displays all submitted feedback from the backend.
- **API Service:** Handles HTTP requests using Axios to interact with the backend API endpoints.

## API Endpoints

- **POST `/api/feedback`:** Submits new feedback.
- **GET `/api/feedback`:** Retrieves all feedback entries.

## Data Flow and Logic

### Frontend:

- **FeedbackForm:** Captures user input and sends it to the backend using Axios.
- **FeedbackList:** Fetches data from the backend and dynamically displays it.
