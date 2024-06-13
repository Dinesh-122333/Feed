# Feed

**Technologies Used**
Frontend: React.js, Axios for HTTP requests, Bootstrap for styling.
Backend: Express.js for API handling.

**Features**
1.Feedback Form: Allows users to submit their name and feedback.
2.Feedback List: Displays all submitted feedback.
3.Error Handling: Manages errors for invalid input or failed submissions.
4.Responsive Design: Ensures usability across different devices.

**Components and Modules**
FeedbackForm: Handles user input and submits feedback to the backend.
FeedbackList: Fetches and displays all submitted feedback from the backend.
API Service: Handles HTTP requests using Axios to interact with the backend API endpoints.

**API Endpoints**
POST /api/feedback: Submits new feedback.
GET /api/feedback: Retrieves all feedback entries.

## Data Flow and Logic
**Frontend:**
FeedbackForm captures user input and sends it to the backend using Axios.
FeedbackList fetches data from the backend and displays it dynamically.

**Backend:**
Express.js handles HTTP requests and routes.
Feedback data is stored (or simulated) in memory
