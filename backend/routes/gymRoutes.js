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

router.get('/:id', async (req, res) => {
  try {
    const gymId = Number(req.params.id);

    const gym = await prisma.gym.findUnique({
      where: {
        id: gymId,
      },
    });

    if (!gym) {
      return res.status(404).json({
        error: 'Gym not found',
      });
    }

    res.json(gym);

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

router.put('/:id', async (req, res) => {
  try {
    const gymId = Number(req.params.id);

    const {
      name,
      address,
      latitude,
      longitude,
      geofenceRadiusMeters,
    } = req.body;

    const gym = await prisma.gym.update({
      where: {
        id: gymId,
      },
      data: {
        name,
        address,
        latitude,
        longitude,
        geofenceRadiusMeters,
      },
    });

    res.json(gym);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const gymId = Number(req.params.id);

    const gym = await prisma.gym.delete({
      where: {
        id: gymId,
      },
    });

    res.json(gym);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

module.exports = router;