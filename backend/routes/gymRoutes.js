const express = require('express');
const prisma = require('../prisma');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const gyms = await prisma.gym.findMany();

    res.json(gyms);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, address, latitude, longitude, geofenceRadiusMeters } = req.body;

    const gym = await prisma.gym.create({
      data: {
        name,
        address,
        latitude,
        longitude,
        geofenceRadiusMeters,
      },
    });

    res.status(201).json(gym);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

module.exports = router;