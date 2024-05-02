# Apple corner

A brief instructions so that we can run this project on a local machine.

## Project overview

This project consists of two main components: a landing page and an admin panel dashboard. The landing page showcases hero sections, events, and products, with dynamic content fetched from the dashboard backend. The admin panel allows authorized users to manage all aspects of the content displayed on the landing page.

## Demo

- Live Sites:
- - Landing page: https://apple-corner-lading-page.vercel.app/
- - Admin panel frontend: https://apple-corner-dashboard.vercel.app/
- - Admin panel backend: https://apple-corner-dashboard-backend.vercel.app/api

## Features

### Landing Page:

- Fully responsive design.
- Dynamic sections:
- - Hero: Showcasing key features or offerings.
- - Events: Displaying upcoming events.
- - Products 1: Highlighting featured products 1.

- Static sections:
- - Navbar: Navigation menu for easy access to different sections.
- - Slider1: A visually appealing slider section.
- - Slider2: Another slider section for additional content.
- - Footer: Providing essential links and information.

## Admin Panel Dashboard:

- Secure authentication with fixed user management.
- Strong security measures implemented.
- Beautiful user interface for ease of use.
- Admin can:
- - View all displayed content on the landing page.
- - Manage all content, including creation, updating, and deletion.

## Tech Stack

- Frontend:
- - React.js with Vite for a fast development environment.
- Backend:
- - Node.js for server-side logic.
- Authentication:
- - Implement strong authentication mechanisms.
- - Security:
- - Ensure robust security measures are in place to protect user data.

## Setup

1. Clone the repository.

```bash
  git https://github.com/MohammadApon11/apple-corner-dashboard
```

2. Navigate to the respective directories: dashboard-backend, dashboard-frontend, landing-page.
3. Install dependencies:

```bash
  npm install
```

4. Start the development servers:
- For the backend, run:
```bash
  npm run dev
```
- For the frontend, run:
```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your server side .env file

`PORT = 5000`

`MONGO_DB_URI =`

`JWT_SECRET =`

`NODE_ENV = 'development'`

## Usage

1. Access the landing page by navigating to its URL.
2. Log in to the admin panel using the provided credentials.
3. Manage content as required.
4. Changes made in the admin panel will reflect dynamically on the landing page.
 
## Deployment

Frontend and Backend Both are deploy in vercel that linking in github repository


```bash
  vercel
```

## Used Dependencies

### Backend

- express
- mongoose
- jsonwebtoken
- cors
- dotenv
- morgan
- bcryptjs
- cookie-parser
- nodemon

### Frontend 

- react
- react-dom
- react-router-dom
- react-scripts
- axios
- sweetalert2
- react-icons
- react-hot-toast
- react-hook-form
- react-fast-marquee
- react-slick

## Contributors

- MohammadApon11