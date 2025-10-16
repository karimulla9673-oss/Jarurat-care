Patient Records Dashboard
A modern, responsive web application built with React for managing and viewing patient records. This project demonstrates React Hooks, state management, API integration, and responsive UI design.

Features:
•	Landing Page: Clean header with Jarurat Care branding and navigation
•	Patient List: Display patients in responsive card/grid layout
•	Search Functionality: Real-time filtering of patients by name
•	Patient Details: View detailed information in a modal popup
•	Add New Patient: Form to add patients locally (no backend required)
•	Loading & Error States: Smooth user experience with proper state handling
•	Fully Responsive: Works seamlessly on desktop, tablet, and mobile devices

Screenshots:
Home Page
![image alt](https://github.com/karimulla9673-oss/Jarurat-care/blob/62ddc109dc701bf4a76e2683e7d62bcafd2980a7/Screenshot%202025-10-16%20094219.png)
Patients Dashboard
![image alt](https://github.com/karimulla9673-oss/Jarurat-care/blob/59d1e28ccf15ef30382968d665a47bd0ddf68a3a/Screenshot%202025-10-16%20094326.png)
Add New Patient Form
![image alt](https://github.com/karimulla9673-oss/Jarurat-care/blob/19bc1a4c49a3dde1f858e75128026a18d2d12847/Screenshot%202025-10-16%20094412.png)
About Page
![image alt](https://github.com/karimulla9673-oss/Jarurat-care/blob/4543de4b437fc42372ee8da3313175198717bac4/Screenshot%202025-10-16%20094348.png)
 
Technologies Used:
•	React: UI library for building the interface
•	React Hooks: useState, useEffect for state management
•	Lucide React: Icon library for UI elements
•	JSONPlaceholder API: Free API for testing and prototyping

Prerequisites:
Before you begin, ensure you have the following installed:
•	Node.js (v14.0 or higher)
•	npm (v6.0 or higher)

Installation & Setup:
Step 1: Clone the Repository
git clone https://github.com/yourusername/patient-records-dashboard.git
cd patient-records-dashboard
Step 2: Install Dependencies
npm install
Step 3: Start the Development Server
npm start
The application will open in your browser at http://localhost:3000

Project Structure:
JARURATCARE/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutPage.jsx
│   │   ├── AddPatientModal.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── Modal.jsx
│   │   └── PatientsPage.jsx
│   ├── App.css
│   ├── App.jsx              
│   ├── index.css            
│   └── main.jsx           
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

Usage:

Viewing Patients:
1.	Navigate to the Patients page from the navigation bar
2.	Browse through the patient cards displaying name, age, and contact information
3.	Use the search bar to filter patients by name in real-time
4.	
Viewing Patient Details:
1.	Click the View Details button on any patient card
2.	A modal will open showing complete patient information
3.	Close the modal by clicking the X button or outside the modal

Adding a New Patient:
1.	Click the Add New Patient button on the Patients page
2.	Fill in the form with patient details: 
o	Full Name
o	Age
o	Phone Number
o	Email Address
3.	Click Add Patient to save (stored locally in state)

Search Functionality:
•	Type in the search bar to filter patients by name
•	Search is case-insensitive and updates in real-time
•	Clear the search to view all patients again

Configuration:
API Integration
The application fetches patient data from JSONPlaceholder API:
https://jsonplaceholder.typicode.com/users
To use a different API, update the fetch URL in the fetchPatients() function in App.jsx.
