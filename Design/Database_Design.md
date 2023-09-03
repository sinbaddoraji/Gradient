
# Database Design for Reddit Clone

## Database Choice: MongoDB

### Collections:

1. **Users**:
   - `userID`: unique identifier
   - `username`: string
   - `password`: hashed string
   - `email`: string
   - `createdDate`: date
   - `profile`: embedded document with user details

2. **Nests**:
   - `nestID`: unique identifier
   - `name`: string
   - `description`: string
   - `createdDate`: date
   - `creator`: userID

3. **Posts**:
   - `postID`: unique identifier
   - `title`: string
   - `content`: string or link
   - `createdDate`: date
   - `author`: userID
   - `nest`: nestID

4. **Comments**:
   - `commentID`: unique identifier
   - `content`: string
   - `createdDate`: date
   - `author`: userID
   - `post`: postID
   - `parentComment`: commentID (for nested comments)

6. **Votes**:
   - `voteID`: unique identifier
   - `user`: userID
   - `entityID`: postID or commentID
   - `entityType`: string (post or comment)
   - `type`: string (upvote or downvote)



