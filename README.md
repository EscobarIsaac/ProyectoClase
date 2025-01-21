# Task Manager

A simple task manager application built with Node.js and Express.

## Features
- Create, read, update, and delete tasks.
- Mark tasks as completed or pending.

## Prerequisites
- Node.js (v16 or higher)
- npm

## Installation
1. Clone or download this repository.
2. Open a terminal and navigate to the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
Start the server with the following command:
```bash
node src/app.js
```
The server will run on `http://localhost:3000`.

## Running Tests
To execute tests with Jest, run:
```bash
npm test
```

## SonarQube Integration
1. Set up a SonarQube server.
2. Configure the `sonar-project.properties` file with your SonarQube token.
3. Run the SonarQube scan from your CI/CD pipeline or locally.

## Folder Structure
```
task_manager/
├── src/
│   ├── app.js          # Main application file
│   ├── routes/         # API routes
│   ├── models/         # Data models
│   └── controllers/    # Business logic
├── tests/              # Unit tests
├── package.json        # Project configuration
├── sonar-project.properties  # SonarQube configuration
└── README.md           # Project instructions
```

## License
This project is licensed under the MIT License.
