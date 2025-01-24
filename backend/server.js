const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.ATLASDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));
// mongoose.connect('mongodb://localhost:27017/portfolio', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('MongoDB connection error:', error));

// Mongoose Schema and Model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  phone: { type: String, required: true },  // Added phone number field
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Endpoints
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;  // Added phone
    const newContact = new Contact({ name, email, message, phone });  // Save phone number
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save message', error });
    console.log(error);
  }
});

app.get('/',(req,res)=>{
  res.send('Hello World!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
