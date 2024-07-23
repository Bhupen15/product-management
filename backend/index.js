const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api', productRoutes);
//hey!! Bhupendra Choudhary
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
