                                        MAKE YOUR MONEY

Make Your Money is a web application designed to help individuals in rural or developing rural areas start their own businesses, even with a small budget. The platform provides AI personalized business ideas and also suggests relevant government schemes, making it easier for users to take advantage of policies they may not be aware of.

## Features

### User Authentication
Secure signup and login functionality using JWT for token-based authentication.

### Dashboard
Users can access a personalized dashboard once logged in.

### Business Idea Generator
The core functionality allows users to input their budget, location, and language preferences. The platform generates 5 business ideas tailored to their input, including:

* Title and description
* Budget allocation
* Profit margin
* Potential of the business
* Government schemes that could help start or support the business
* The response is generated in the user's desired language, helping users take full advantage of available resources.


##Main Aim

The main goal of Make Your Money is to empower individuals, especially in rural or developing rural areas, by providing them with the knowledge and tools to start their own businesses. Many people in these areas are unaware of what they can do to start a business or what government policies are available to assist them. This project not only generates business ideas but also highlights government schemes that can help users take advantage of available financial or infrastructural support.

##Future Implementation
The future direction of this project is to offer AI-generated suggestions for existing businesses. These suggestions will focus on helping business owners increase their profits and adopt sustainable practices, contributing to both financial growth and environmental sustainability.

##Technology Stack

###Frontend

Next.js: Server-side rendering and routing.
Tailwind CSS: Utility-first CSS framework for styling.
Backend
Node.js: Backend logic and API handling.
MongoDB: NoSQL database to store user information.
Express: Web framework for creating REST APIs.
Packages Used
bcryptjs: Used for password hashing.
cors: Middleware to handle Cross-Origin Resource Sharing.
dotenv: For loading environment variables from a .env file.
express: Web framework for building API routes.
jsonwebtoken: For generating and verifying JWT tokens for user authentication.
mongoose: MongoDB object modeling tool for managing database operations.



Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Tanuj1718/make-your-money.git
Navigate to the project directory:

bash
Copy code
cd make-your-money
Install dependencies for both frontend and backend:

bash
Copy code
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
Create a .env file in the backend directory: Define the following environment variables:

env
Copy code
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
Run the project:

Start the backend server:

bash
Copy code
cd backend
node index.js
Start the frontend development server:

bash
Copy code
cd ../frontend
npm run dev
Access the application: Open your browser and go to http://localhost:3000.

Usage
Sign up or log in using the authentication system.
Fill out the business idea form with your budget, location, and language preference.
Receive 5 AI-generated business ideas, which are structured and tailored to your inputs.
Use the dashboard to manage your account and view your past interactions.