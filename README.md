# Matchkin Mini Project

A full-stack mini project for a consultant-client matching platform, featuring OTP-based email authentication, JWT-secured endpoints, consultant matching logic, and a minimal React frontend. This project demonstrates modern Node.js, Express, MongoDB, and React practices, with API testing supported via a Postman collection.

---

## Features

- **OTP-based Email Login**  
  Secure login using email and one-time password (OTP), with OTPs expiring after 5 minutes (simulated Redis TTL in-memory).

- **JWT Authentication & Role-Based Access**  
  JWT tokens are issued post-OTP verification, with role-based middleware for secure API access.

- **MongoDB Data Models**  
  - `User`: Stores authentication and role info  
  - `ClientProfile`: Client-specific profile data  
  - `ConsultantProfile`: Consultant skills, domains, and availability

- **Consultant Matching Engine**  
  `/api/match` endpoint receives a project object and returns the top 3 consultants based on skill/domain overlap, including a match score and explanation.

- **Minimal Frontend Demo**  
  React-based UI for OTP login, project submission, and viewing matches.

- **API Testing**  
  Postman collection included for all major endpoints.

---

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose), Nodemailer, JWT
- **Frontend:** React ([see memory][1]), Axios
- **Testing:** Postman
- **Other:** dotenv for environment variables

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Suvanshhh/matchkin_task3.git
cd matchkin-mini
```

### 2. Setup Environment Variables

Create a `.env` file in `/backend` with:

```
PORT=4000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
```

### 3. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../frontend
npm install
```

### 4. Run the Application

**Start MongoDB (if running locally).**

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd ../frontend
npm start
```

---

## API Endpoints

| Endpoint                        | Method | Description                    |
|----------------------------------|--------|--------------------------------|
| `/api/auth/request-otp`          | POST   | Request OTP for login          |
| `/api/auth/verify-otp`           | POST   | Verify OTP & get JWT           |
| `/api/match`                     | POST   | Get top 3 consultant matches   |

See the included Postman collection in `/postman` for example requests and payloads.

---

## Postman Collection

- Import the JSON file from the `/postman` folder into Postman to test all endpoints.

- <img width="459" alt="image" src="https://github.com/user-attachments/assets/b6c40900-7413-46bb-8e4c-98a273fa3eec" />
- <img width="459" alt="image" src="https://github.com/user-attachments/assets/1b420815-902b-43f1-b519-8b137dba666f" />
- <img width="459" alt="image" src="https://github.com/user-attachments/assets/a556bf43-f428-47ab-ad66-7a9276df0008" />
- <img width="459" alt="image" src="https://github.com/user-attachments/assets/b715989d-76c2-41ec-bb89-ceb9d9c76933" />


---

## Folder Structure

```
/backend
  /controllers
  /models
  /routes
  /middleware
  /utils
  server.js
  .env
/frontend
  /src
    /components
    App.js
/postman
  matchkin-api.postman_collection.json
```

