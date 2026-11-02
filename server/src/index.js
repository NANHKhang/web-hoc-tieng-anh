require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
  const userCount = await prisma.user.count();
  res.json({ success: true, message: 'Server OK', data: { userCount } });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy ở http://localhost:${PORT}`));