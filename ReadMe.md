# Mentor-Student Relationship Management System 🌟

Welcome to the Mentor-Student Relationship Management System! 🤝📚

## Overview
In this bustling 🏙️ city of knowledge, mentors and students form meaningful connections. 🌱 Mentors guide students on their learning journey, much like nurturing plants. As students grow, learn, and evolve, they eventually become mentors themselves. 🌟 It's a beautiful cycle of knowledge-sharing and growth! 🌱🌟

## Key Components
1. **Mentor and Student Models** 🧑‍🏫👩‍🎓
   - We've defined two essential models: `Mentor` and `Student`.
   - The `Mentor` schema includes a required field for their name.
   - The `Student` schema likely has additional fields (not shown here).

2. **Controller Functions** 🎛️
   - Our system provides various controller functions:
     - Creating mentors and students.
     - Assigning mentors to students.
     - Changing mentors.
     - Retrieving student information based on mentor ID.

3. **Database Connection** 🗄️
   - We've connected to a MongoDB database using Mongoose.
   - The database URL and password are securely configured.

4. **Express Routes** 🛣️
   - Our Express routes handle mentor-related and student-related endpoints.
   - Examples:
     - Creating mentors: `POST /mentors`
     - Assigning mentors: `POST /students/assign`
     - Retrieving students by mentor ID: `GET /students/mentor/:mentorId`

5. **Server Setup** 🚀
   - Our Express server listens on port 3000 (or the specified environment port).
   - We use `body-parser` middleware to handle JSON requests.

## Installation
To get started with this project, follow these steps:

Clone the repository to your local machine:
1. git Clone the repository:
     ``` https://github.com/KavinPrasad2948/Nodejs_Mentor_Student.git```

2. Install the necessary dependencies:
   
     ```npm install```

3. Run the application:
    
    ```npm start```

📜 License
This project is licensed under the MIT [License](https://github.com/KavinPrasad2948/Nodejs_Mentor_Student.git). 🌟