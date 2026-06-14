const express = require('express');
const prisma = require('../prisma');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const foodEntries = await prisma.foodEntry.findMany();
    res.json(foodEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      userId,
      entryDate,
      foodName,
      calories,
      protein,
      carbs,
      fat,
    } = req.body;

    const foodEntry = await prisma.foodEntry.create({
      data: {
        userId,
        entryDate: new Date(entryDate),
        foodName,
        calories,
        protein,
        carbs,
        fat,
      },
    });

    res.status(201).json(foodEntry);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

module.exports = router;