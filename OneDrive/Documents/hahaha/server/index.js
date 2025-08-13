const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const usersPath = path.join(__dirname, 'users.json');
const getUsers = () => {
  try {
    return JSON.parse(fs.readFileSync(usersPath, 'utf8')).users;
  } catch (error) {
    // If file doesn't exist, create it with default user
    const defaultUsers = { users: [] };
    fs.writeFileSync(usersPath, JSON.stringify(defaultUsers, null, 2));
    return defaultUsers.users;
  }
};

const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(usersPath, JSON.stringify({ users }, null, 2));
};

app.post('/api/signup', (req, res) => {
  try {
    const { username, password, email } = req.body;
    const users = getUsers();

    // Check if username already exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ error: 'Username already exists', success: false });
    }

    // Save new user
    const newUser = { username, password, email };
    saveUser(newUser);
    
    // Generate token for auto-login
    const token = jwt.sign({ username }, 'celestial_secret', { expiresIn: '2h' });
    res.json({ token, success: true });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Server error', success: false });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Login attempt:', { username, password });
    
    const users = getUsers();
    console.log('Available users:', users);
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      const token = jwt.sign({ username }, 'celestial_secret', { expiresIn: '2h' });
      res.json({ token, success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials', success: false });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error', success: false });
  }
});

app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;
  // Replace with your real SMTP config
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: { user: 'user@example.com', pass: 'password' }
  });
  try {
    await transporter.sendMail({
      from: email,
      to: 'celestial@store.com',
      subject: 'Contact from Celestial Website',
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Email failed to send.' });
  }
});

app.get('/api/items', (req, res) => {
  res.json([
    { name: 'Game Time (1hr)', price: 5 },
    { name: 'Monster Energy', price: 3 },
    { name: 'Doritos', price: 2 },
    { name: 'Celestial Space Shooter', price: 20 }
  ]);
});

app.listen(5000, () => console.log('Celestial server running on port 5000'));
