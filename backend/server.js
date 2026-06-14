require('dotenv').config();

const express = require('express');
const prisma = require('./prisma');
const gymRoutes = require('./routes/gymRoutes');
const foodEntryRoutes = require('./routes/foodEntryRoutes');

const app = express();
app.set('json spaces', 2);

app.use(express.json());

app.use('/gyms', gymRoutes);
app.use('/food-entries', foodEntryRoutes);

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

app.get('/search-users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        name: req.query.name,
      },
    });

    res.json(users);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

app.post('/users', async (req, res) => {
  try {
    console.log(req.body);

    const { email, name, age, height, weight } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        name,
        age,
        height,
        weight,
      },
    });

    res.status(201).json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);

    const { name, age, height, weight } = req.body;

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        age,
        height,
        weight,
      },
    });

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id);

    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});