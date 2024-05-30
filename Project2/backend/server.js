const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant_auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.use(cors());
app.use(express.json());

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.json({ token });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
