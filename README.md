
# Class Plannr 
![alt text](image.png)

# Link
Heoku

## Overview

**Class Plannr** is a class schedule planner built with Node.js, Express, and MongoDB. It allows users to create, edit, and delete their weekly class schedules. The app also features session-based authentication, ensuring that only logged-in users can interact with the schedule functionalities.

The main goal of this project is to provide a convenient tool for students to organize their classes, track important times, and manage their weekly schedule. It leverages modern web technologies and adheres to industry best practices in code organization, user interface design, and security.

---

## Features

- **Create Schedule**: Users can add classes to their weekly schedule.
- **Edit Schedule**: Users can edit the details of their existing classes.
- **Delete Schedule**: Users can remove classes from their schedule.
- **Authentication**: Users must log in to access the features of the application. Guest users cannot create, edit, or delete schedules.
- **Responsive UI**: The app is designed with a consistent color scheme and layout using Flexbox.
- **CRUD Operations**: Full Create, Read, Update, and Delete functionality for the schedule.
- **Authorization**: The user(instructor) can  manage their own class schedule.

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or above)
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/restbackDev/class-plannr.git
   ```

2. Navigate into the project folder:
   ```bash
   cd class-plannr
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up your MongoDB connection. If you’re using a local MongoDB database, ensure MongoDB is running. You can also use a MongoDB cloud service like MongoDB Atlas and update the connection string accordingly in the `.env` file.

5. Create an `.env` file in the root of the project with the following variables:
   ```env
   DB_URI=mongodb://localhost:27017/class-plannr
   SESSION_SECRET=your_session_secret
   ```

6. Run the application:
   ```bash
   npm start
   ```

7. Open the app in your browser at `http://localhost:3000`.

### Planning Materials
#### Trello
You can view my planning documents [here](https://trello.com/b/EE2dRrIv/project-2).

---

## Technologies Used

- **Node.js**: JavaScript runtime environment for the backend.
- **Express.js**: Web framework for Node.js used to handle HTTP requests.
- **MongoDB**: NoSQL database for storing user and schedule data.
- **EJS**: Templating engine to render views on the server side.
- **CSS**: For styling the app, utilizing Flexbox and Grid for layout.
- **Session-based Authentication**: To manage user login and authorization.


## Next Steps | Future Updates

While the app is fully functional, here are some planned enhancements:

1. **Responsive Enhancements**: Improve mobile responsiveness and make the design more fluid across devices.
2. **Calendar Integration**: Integrate Google Calendar or other calendar APIs to sync class schedules.
3. **User Profile**: Allow users to update their profile information, including their name, contact info, and class preferences.
4. **Notifications**: Implement email or in-app notifications for upcoming classes or schedule changes.
5. **Search and Filter**: Add features to search and filter through classes by time or course name.

---

## Attributions

- [Bulma](https://bulma.io/) - CSS framework used for responsive design.


