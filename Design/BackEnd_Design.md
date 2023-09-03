# Back-End Design for Reddit Clone

## Technology Stack:

- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Express.js**: Framework for building the API.

## Possible Modules and Utilities:

1. **mongoose**: ORM for MongoDB to simplify database interactions.
2. **bcrypt**: For hashing user passwords.
3. **jsonwebtoken (JWT)**: Create authentication tokens for users.
4. **cors**: Middleware to enable CORS.
5. **morgan**: Logging middleware.
6. **dotenv**: Load environment variables from a `.env` file.

## API Endpoint Examples:

- **Users**:
  - POST `/api/v1/users/register`: Register a new user.
  - POST `/api/v1/users/login`: Authenticate and return a token.
  - GET `/api/v1/users/me`: Retrieve the profile of the authenticated user.
  - GET `/api/v1/users/:userID/activities` : Retrieve a user's activities, like posts, comments, upvotes

- **Nests**:
  - GET `/api/v1/nests`: Retrieve all Nests.
  - GET `/api/v1/nests/:nestID`: Retrieve specific Nest details.
  - POST `/api/v1/nests`: Create a new Nest.
  - PUT `/api/v1/nests/:nestID`: Edit specific Nest details.
  - GET `/api/v1/nests/:nestID/Comments`: Get all nest  comments
  - GET `/api/v1/nests/:nestID/Comments?limit=10&page=2&sortBy=date`: Get all nest  comments
  - POST `/api/v1/nests/:nestID/Comments`: Post a nest  comment
  - GET `/api/v1/nests/:nestID/Comments/:commentID`: Get nest comment
  - POST `/api/v1/nests/:nestID/Comments/:commentID`: Post new nest comment
  - PUT `/api/v1/nests/:nestID/Comments/:commentID`: Update nest comment
  - DELETE `/api/v1/nests/:nestID/Comments/:commentID`: Delete nest comment
  - POST `/api/v1/nests/:nestID/follow` : Follow a Nest
  - DELETE `/api/v1/nests/:nestID/follow` : Unfollow a Nest

- **Posts**:
  - GET `/api/v1/posts`: Retrieve all posts.
  - POST `/api/v1/posts`: Create a new post.
  - PUT `/api/v1/posts/:postID` : Edit specific post details
  - PUT `/api/v1/posts/:postID/vote`: Upvote/Downvote a specific post.
  - GET `/api/v1/posts/:postID/followers`: Retrieve all post followers
  - POST `/api/v1/posts/:postID/followers`: Add new post follower
  - DELETE `/api/v1/posts/followers/:userID`: Unfollow post
  - GET `/api/v1/posts?limit=10&page=2&sortBy=date` : Paginate posts and sort by (date, topic, popularity)

- **Search**:
  - GET `/api/v1/search?query=keyword` : Search across posts, Nests, and users

- **Media Upload**:
  - POST `/api/v1/media/upload` : Upload media files

