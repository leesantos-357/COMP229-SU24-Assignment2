const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://leesantos:0wqhnTIoKuN3uTw3@comp229-su24.zcztvdz.mongodb.net/?retryWrites=true&w=majority&appName=COMP229-SU24', {  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.get('/', (req, res) => {
  res.send({"Message": "Welcome to DressStore application!"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

