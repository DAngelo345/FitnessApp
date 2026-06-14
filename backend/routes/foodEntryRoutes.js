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

router.get('/:id', async (req, res) => {
  try {
    const foodEntryId = Number(req.params.id);

    const foodEntry = await prisma.foodEntry.findUnique({
      where: {
        id: foodEntryId,
      },
    });

    if (!foodEntry) {
      return res.status(404).json({
        error: 'Food entry not found',
      });
    }

    res.json(foodEntry);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
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

router.put('/:id', async (req, res) => {
  try {
    const foodEntryId = Number(req.params.id);

    const {
      entryDate,
      foodName,
      imageUrl,
      calories,
      protein,
      carbs,
      fat,
      source,
    } = req.body;

    const foodEntry = await prisma.foodEntry.update({
      where: {
        id: foodEntryId,
      },
      data: {
        entryDate: entryDate ? new Date(entryDate) : undefined,
        foodName,
        imageUrl,
        calories,
        protein,
        carbs,
        fat,
        source,
      },
    });

    res.json(foodEntry);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const foodEntryId = Number(req.params.id);

    const foodEntry = await prisma.foodEntry.delete({
      where: {
        id: foodEntryId,
      },
    });

    res.json(foodEntry);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

module.exports = router;