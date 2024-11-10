# EazyPG

EazyPG is a comprehensive web application designed to simplify the process of finding and booking Paying Guest (PG) accommodations for students. Our platform facilitates a seamless connection between students (tenants) and accommodation providers (owners), incorporating unique features like compatibility matching, an escrow system for security deposits, and instant financial aid options.

## Features

- **Personalized Profiles:** Users can create detailed profiles, including preferences and lifestyle choices, to ensure compatibility between tenants and owners.
- **Escrow System:** An integrated escrow system to securely manage security deposits, minimizing the risk of fraud.
- **Compatibility Matching:** A Tinder-like feature that allows users to swipe through potential roommates to find a perfect match based on shared habits and interests.
- **Instant Loans:** Provides tenants with instant loans up to 40% of the security deposit to help manage their finances better.

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Integration:** Secure payment gateway integration for handling transactions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
node.js
npm
MongoDB

Creating a well-organized README file for your GitHub repository is essential to communicate the purpose, features, and setup instructions for your project, EazyPG. Below is a template for the README.md file, which you can customize and expand based on the specific details and requirements of your project.

MARKDOWN
# EazyPG

EazyPG is a comprehensive web application designed to simplify the process of finding and booking Paying Guest (PG) accommodations for students. Our platform facilitates a seamless connection between students (tenants) and accommodation providers (owners), incorporating unique features like compatibility matching, an escrow system for security deposits, and instant financial aid options.

## Features

- **Personalized Profiles:** Users can create detailed profiles, including preferences and lifestyle choices, to ensure compatibility between tenants and owners.
- **Escrow System:** An integrated escrow system to securely manage security deposits, minimizing the risk of fraud.
- **Compatibility Matching:** A Tinder-like feature that allows users to swipe through potential roommates to find a perfect match based on shared habits and interests.
- **Instant Loans:** Provides tenants with instant loans up to 40% of the security deposit to help manage their finances better.

## Technology Stack

- **Frontend:** HTML, css, bootstrap, open source libraries.
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Payment Integration:** Secure payment gateway integration for handling transactions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
node.js
npm
MongoDB
Installing
A step by step series of examples that tell you how to get a development environment running:

Clone the repository:

git clone https://github.com/yourusername/EazyPG.git
Navigate to the directory:

cd EazyPG
Install dependencies:

npm install
Set up the environment variables:

Create a .env file in the root directory.
Add the following keys:
PLAINTEXT
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
PAYMENT_GATEWAY_KEY=<Your Payment Gateway API Key>

Run the server:
npm start
Navigate to http://localhost:3000 in your browser.