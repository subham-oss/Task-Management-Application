# Task Management Application

A full-stack task management application designed to help users organize tasks, track progress, manage priorities, and collaborate with others through a clean and responsive interface.

## Features

- **User Authentication:** Secure registration, login, and logout functionality using JWT authentication.
- **Task Management:** Create, update, delete, and manage tasks.
- **Task Status Tracking:** Organize tasks into Pending, In Progress, and Completed.
- **Task Prioritization:** Categorize tasks based on Low, Medium, and High severity.
- **Dashboard Analytics:** Visualize task statistics and monitor overall productivity.
- **Recent Tasks:** Quickly access recently created or updated tasks.
- **Team Management:** Manage team members and collaborate on tasks.
- **Task Sharing:** Share tasks with other users.
- **Protected Routes:** Restrict access to authenticated users.
- **Responsive UI:** User-friendly interface for different screen sizes.
- **Dark Mode:** Switch between light and dark themes.

## Tech Stack

### Frontend
- React.js 19
- TypeScript
- Tailwind CSS v4
- Vite
- React Router
- Axios
- Framer Motion
- React Hook Form
- Zod
- Recharts
- Lucide React

### Backend
- Node.js
- Express.js 5
- TypeScript
- Bun
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cookie Parser

## Project Structure

```text
Task-Management-Application/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── types/
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.ts
│   └── package.json
│
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/subham-oss/Task-Management-Application.git
```

```bash
cd Task-Management-Application
```

### 2. Setup Frontend

```bash
cd client
bun install
```

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
bun run dev
```

### 3. Setup Backend

Open another terminal:

```bash
cd server
bun install
```

Create a `.env` file inside the `server` directory and configure your database connection, authentication secrets, and other required environment variables.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Make sure the environment variable names match those used in your backend configuration.

Start the backend development server:

```bash
bun run dev
```

## Authentication

The application uses JWT-based authentication to secure user accounts and protected resources.

- Access tokens for authenticated API requests.
- HTTP-only cookies for refresh token management.
- Password hashing using bcryptjs.
- Protected routes for authorized users.
- Logout functionality with session/token invalidation.

## Task Management Workflow

1. Register or log in to your account.
2. Create tasks with titles, descriptions, priorities, and deadlines.
3. Track tasks through different status stages.
4. Monitor productivity using dashboard analytics.
5. Manage team members and share tasks.
6. Update or complete tasks as work progresses.

## Future Improvements

- Real-time collaboration.
- Live notifications.
- Advanced task filtering and searching.
- Improved team collaboration features.
- Task activity history.
- Additional analytics and productivity reports.

## Contributing

Contributions, suggestions, and feature requests are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Submit a pull request.

## Author

**Subham Chakraborty**

- GitHub: [@subham-oss](https://github.com/subham-oss)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/subham448/)

---

If you find this project useful, consider giving the repository a star!

**Built with React, TypeScript, Node.js, Express, and MongoDB.**