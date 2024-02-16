# ToDo

A user-friendly task management application built with React and Express.js. Users can  organize their tasks by adding, editing, and deleting tasks as per their requirements. Additionally, the app features an admin panel that allows administrators to manage users efficiently by adding and deleting user accounts. The app improves productivity for both administrators and users by simplifying task management with its effective features and easy-to-use interface.

The frontend of the application has been developed using Bootstrap framework and with the help of React's useful hooks. This includes designing the layout, styling elements, and implementing features for the task management app. On the backend, I used Node.js along with the Express framework to handle server-side logic and API endpoints. This ensures efficient data processing, routing, and communication between the frontend and backend components of the application.

## Table of contents
  
- [Installation](#installation)  
- [Requirements](#requirements)  
- [Architecture](#architecture)    
- [Basic usage](#basic-usage)  
- [Features](#features)

## Installation  

To use this code, follow the steps given below:
- Clone this repository.
- Run 'npm install' or 'yarn install if you have yarn install on your device. This command will install all the packages needed in the project listed on 'package.json'.
- To use any additional package, install them via npm or yarn.
- You might want to install a local web server for building your own server.
- Also, put all the environment variables in .env file in the root directory including database credentials, Secret Keys, etc. 
- You are good to go with all these installations in place.

## Requirements  

- IDE (Eg. Visual Studio Code)
- Node.js
- Local webserver (Eg. XAMPP)

## Architecture  

The project has been developed using MVC (Model-View-Controller) architecture.
- Models: All the model.ts files contain models of the tables in the database.
- Controllers: They contain the business logic that connects the database and the UI. All the CRUD operations are conducted in controller.js files.
- Views: The components in the frontend directory are the views that the users can see. Users can interact with the app via the React components. 

## Features

- Register on the app to manage a to-do list.
- Login to maintain the list.
- Add, delete, update tasks on the list.
- Add or delete users via the admin panel.
