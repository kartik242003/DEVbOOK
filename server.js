const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect to Database
connectDB();

// Initialize Middleware
app.use(express.json({ strict: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve Static assets in production
const _dirname = path.dirname("");
const buildpath = path.join(_dirname,"./client/build");

  // Set Static Folder
  app.use(express.static(buildpath));

app.get('/',(req,res) => {
  res.send('go');
})
// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
