# Hospital Management System
### This project consists of two frontend applications for a Hospital Management System: a general frontend for patients and a dashboard for administrators and staff.

## Hosted Link 

## frontend for patients : https://hms-patients-screen-frontend.netlify.app

## dashboard for administrators and staff : https://admin-dashboard-hms-frontend.netlify.app


## First-Time Login Instructions
Please use the following credentials for your initial login as an Administrator. Only an existing Administrator can register new Admin users. Therefore, you cannot self-register as an Administrator initially.
```json
{
    "email": "peter@example.com",
     "password": "peter123",
     "confirmPassword": "peter123",
}
```

## Dashboard Frontend
. Installation

. Environment Variables

. Usage

. Features
 
. Contributing

. License


# Dashboard Frontend
 This is the dashboard frontend application for the Hospital Management System, designed for use by administrators and hospital staff.

# Installation
Clone the repository:

bash
Copy code
git clone `git clone https://github.com/YourUsername/hospital-management-dashboard.git
`
cd hospital-management-dashboard
Install dependencies:

bash
Copy code
npm install

Set up environment variables. Create a .env file in the root directory and add the following variables:

Copy code
REACT_APP_API_URL=`http://localhost:5000/api/v1`

# Environment Variables
`REACT_APP_API_URL`: The base URL for the API endpoints.
Usage
Start the development server:

bash
Copy code
npm start
The application will run on http://localhost:3001.

## Features
. Admin and staff login

. Managing patient and doctor records

. Viewing and updating appointments

. Viewing messages from patients

. Role-based access control


## Contributing
Contributions are welcome! Please create an issue or submit a pull request with your proposed changes.
