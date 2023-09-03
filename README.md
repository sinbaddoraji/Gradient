### Gradient Reddit Clone AP

A Reddit-like platform using React, Node.js, Express.js, and MongoDB.

---

#### Technology Stack:
- **Node.js**: Runtime environment for executing server-side JavaScript.
- **Express.js**: Back-end web application framework for Node.js.
- **MongoDB**: NoSQL database for storing data in flexible, JSON-like documents.
- **MongoDB**: Frontend technology

#### Modules and Utilities:
- **mongoose**: ORM for MongoDB to simplify database interactions.
- **bcrypt**: Hashing utility for user passwords.
- **jsonwebtoken (JWT)**: Authentication tokens for users.
- **cors**: Middleware to enable CORS.
- **morgan**: Logging middleware.
- **dotenv**: Loading environment variables from a `.env` file.


#### Getting Started:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-dir>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory of the API and add the following (replace values with your specifics):
   ```
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Running the API**:
   ```bash
   npm start
   ```