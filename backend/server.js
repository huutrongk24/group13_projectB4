require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ← thêm dòng này
const mongoose = require('mongoose');
const app = express();

app.use(cors()); // thêm dòng này
app.use(express.json());



const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
