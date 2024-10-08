# MAKE YOUR MONEY

Make Your Money is a web application designed to help individuals in rural or developing rural areas start their own businesses, even with a small budget. The platform provides AI personalized business ideas and also suggests relevant government schemes, making it easier for users to take advantage of policies they may not be aware of.

## Features

### User Authentication
Secure signup and login functionality using JWT for token-based authentication.

### Dashboard
Users can access a personalized dashboard once logged in. Also there is a tutorial section where one can learn how to use this platform and different business strategies.

### Business Idea Generator
The core functionality allows users to input their budget, location, and language preferences. The platform generates 5 business ideas tailored to their input, including:

* Title and description
* Budget allocation
* Profit margin
* Potential of the business
* Government schemes/policies that could help start or support the business
* The response is generated in the user's desired language, helping users take full advantage of available resources.


## Main Aim

The main goal of Make Your Money is to empower individuals, especially in rural or developing rural areas, by providing them with the knowledge and tools to start their own businesses. Many people in these areas are unaware of what they can do to start a business or what government policies are available to assist them. This project not only generates business ideas but also highlights government schemes that can help users take advantage of available financial or infrastructural support.

## Future Implementation
The future direction of this project is to offer AI-generated suggestions for existing businesses. These suggestions will focus on helping business owners increase their profits and adopt sustainable practices, contributing to both financial growth and environmental sustainability.

## Technology Stack

### Frontend

* Next.js: Server-side rendering and routing.
* Tailwind CSS: Utility-first CSS framework for styling.

### Backend

* Node.js: Backend logic and API handling.
* MongoDB: NoSQL database to store user information.
* Express: Web framework for creating REST APIs.

### Packages Used

* bcryptjs: Used for password hashing.
* cors: Middleware to handle Cross-Origin Resource Sharing.
* dotenv: For loading environment variables from a .env file.
* express: Web framework for building API routes.
* jsonwebtoken: For generating and verifying JWT tokens for user authentication.
* mongoose: MongoDB object modeling tool for managing database operations.


## Setup and Installation

### Clone the repository:

                    git clone https://github.com/Tanuj1718/MakeYourMoney

**Frontend:**

Navigate to the frontend directory:

                            cd frontend

Install dependencies and start the development server:

                            npm install
                            npm run dev
**Backend:**

Navigate to the backend directory:

                            cd Backend
Install dependencies:

                            npm install

**Define the following environment variables in .env file:**

* MONGODB_URI=your-mongodb-connection-string
* JWT_SECRET=your-jwt-secret
* GEMINI_API_KEY = your-api-key

**Start the server:**

                            npm run dev


## Usage

* Sign up or log in using the authentication system.
* Fill out the business idea form with your budget, location, and language preference.
* Receive 5 AI-generated business ideas, which are structured and tailored to your inputs.
* Use the dashboard to manage your account and view your past interactions.
