const mongoose = require('mongoose');
const path = require("path");
const config = require('config');
const express = require('express');
const user = require('./routes/users');
const startup = require('./routes/startups');
const post = require('./routes/posts');
const donation = require('./routes/donations');
const auth = require('./routes/auth');

const app = express();


if (!config.get("jwtPrivateKey")) {
  console.error("FATAL Error: JWT SignatureKey is not defined");
  process.exit(1);
}

mongoose.connect('mongodb://test:test123@cluster0-shard-00-00-g4ysa.mongodb.net:27017,cluster0-shard-00-01-g4ysa.mongodb.net:27017,cluster0-shard-00-02-g4ysa.mongodb.net:27017/Project1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// mongodb://localhost/Project
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*"); // keep this if your api accepts cross-origin requests
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, auth-token");
  next();
}
)
app.use('/api/users', user);
app.use('/api/startups', startup);
app.use('/api/posts', post);
app.use('/api/donations', donation);
app.use('/api/auth', auth);





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));