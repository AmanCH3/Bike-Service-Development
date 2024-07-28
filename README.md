Bike Service Pickup and Drop-off Web Application

Welcome to the Bike Service Pickup and Drop-off Web Application! This project is designed to streamline the process of scheduling, managing, and tracking bike services for customers.
Table of Contents

    Project Overview
    Features
    Tech Stack
    Installation
    Usage
    API Endpoints
    Contributing
    License

Project Overview

This web application allows customers to schedule bike service pickups and drop-offs, track the status of their service, and view service history. It also provides an admin dashboard for managing services, staff, and orders.
Features

    User registration and authentication
    Schedule bike service pickups and drop-offs
    Track service status
    View service history
    Admin dashboard for managing services, staff, and orders
    Responsive design for mobile and desktop use

Tech Stack

    Frontend: React, Tailwind CSS, TypeScript
    Backend: Java Spring Boot
    Database: PostgreSQL
    Authentication: JSON Web Tokens (JWT)
    Deployment: Docker, Kubernetes

Installation
Prerequisites

    Node.js and npm installed
    PostgreSQL instance running
    Docker and Kubernetes installed (for deployment)

Backend Setup

    Clone the repository:

    bash

git clone git@github.com:AmanCH3/Bike-Service-Development.git
cd bike-service-app/backend

Configure PostgreSQL:

    Create a PostgreSQL database.
    Update the application.properties file with your PostgreSQL database credentials:

    arduino

    spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

Build and run the backend server:

bash

    ./mvnw spring-boot:run

Frontend Setup

    Navigate to the frontend directory:

    bash

cd ../frontend

Install dependencies:

bash

npm install

Start the frontend development server:

bash

    npm start

Usage
User Registration and Login

    Open the frontend application in your browser at http://localhost:3000.
    Register a new account or log in with an existing account.

Scheduling a Service

    Navigate to the service scheduling page.
    Fill in the required details (bike information, service type, pickup/drop-off date and time).
    Submit the form to schedule the service.

Admin Dashboard

    Log in with an admin account.
    Access the admin dashboard to manage services, staff, and orders.

API Endpoints
Authentication

    POST /api/auth/register - Register a new user
    POST /api/auth/login - Log in a user

Customer

    POST /api/customer/details - Submit customer details
    GET /api/customer/services - Get a list of available services

Service

    POST /api/service - Create a new service
    GET /api/service - Get a list of services

Order

    POST /api/order - Create a new order
    GET /api/order - Get a list of orders

Contributing

Contributions are welcome! Please follow these steps to contribute:

    Fork the repository.
    Create a new branch for your feature or bugfix.
    Make your changes.
    Submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details
