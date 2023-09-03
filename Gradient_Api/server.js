const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Use routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/nests', require('./routes/nests'));
app.use('/api/v1/posts', require('./routes/posts'));
app.use('/api/v1/search', require('./routes/search'));
app.use('/api/v1/media', require('./routes/media'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
