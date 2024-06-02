# Wellness Event (Backend) 
This project implements Mern Stack.

## Technologies used:
[![My Skills](https://skillicons.dev/icons?i=express,ts,mongo)](https://skillicons.dev)

## Getting Started

Follow the steps below to run this project on your machine.

### Prerequisites

Make sure you have installed the following prerequisites before proceeding:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository to your local machine:

   ```git clone https://github.com/vickyadrii/wellness-event-be.git```

2. Navigate to the project directory:

   ```cd wellness-event-be```
3. Install all the required dependencies using npm or Yarn:
   ````bash
   npm install
   # or
   yarn
   ````

## Configuration

1. Create and set up MongoDB cluster.
2. Configure MongoDB connection in the .env file:

   ````bash
   MONGODB_USERNAME=
   MONGODB_PASSWORD=
   MONGODB_COLLECTION=wellness-event
   MONGODB_CLUSTER=wellness-event-cluster.73iaso2.mongodb.net
   MONGODB_COLLECTION=wellness-event
   MONGODB_OPTIONS="retryWrites=true&w=majority&appName=wellness-event-cluster"
   ````

3. Run migrations to initialize the database schema:

   ```npx prisma migrate dev --name init```

## Usage

Start the Express server:

````bash
   npm run dev
   # or
   yarn dev
   ````

## Built With
- [Express](https://expressjs.com/) - Web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [MongoDB](https://www.mongodb.com/) - NoSQL database
