# Hospital Kidney Testing Backend Server

## Overview

This project is a simple backend server designed for managing kidney testing data in a hospital setting. It provides functionality for storing patient information, test results, and generating reports for medical professionals.

## Features

- **GET Endpoint ("/")**: Returns information about the number of kidneys, healthy kidneys, and unhealthy kidneys for a user named "John".
- **POST Endpoint ("/")**: Adds a new kidney entry to the user's data based on whether it is healthy or not.
- **PUT Endpoint ("/")**: Marks all of John's kidneys as healthy.
- **DELETE Endpoint ("/")**: Deletes unhealthy kidneys if there is at least one unhealthy kidney. Otherwise, it returns an error message.
- **Helper Function**: Checks if there is at least one unhealthy kidney for John.

## Technologies Used

- **Express.js**: A web application framework for Node.js, used for handling HTTP requests and routing.
- **Node.js**: A JavaScript runtime environment used for executing server-side code.
- **JSON**: Data format used for exchanging data between the server and clients.

## Getting Started

To get started with using the backend server, follow these steps:

1. **Clone the Repository**: `git clone https://github.com/vivek-bandi/backend-projects.git`
2. **Install Dependencies**: Run `npm install` to install required dependencies.
3. **Run the Server**: Execute the server script using `node server.js` or `npm start`.

## Usage

Once the server is running, you can interact with it using HTTP requests. Here are some example requests you can make:

- **GET Request**: Retrieve kidney data for user "John".
