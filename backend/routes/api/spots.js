const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const db = require('../../db/models');
const router = express.Router();

//Get all spots
router.get('/', asyncHandler(async (req, res) => {
    const spots = await db.Spot.findAll();
    return res.json(spots);
}))

// Get one spot
router.get("/:id", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const spot = await db.Spot.findByPk(id);
    return res.json(spot);
  })
);

//Create Booking
router.post("/:id/bookings", asyncHandler(async (req, res) => {
    const { userId, booking, spotId, location, guests } = req.body;

    const newBooking = await db.Booking.create({userId, booking, spotId, location, guests })
    console.log('NEWBOOKING', newBooking)
   return res.json( newBooking );
}))

//Update Spot
router.patch(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id, photos, price, description, system, planet, region, arrangements } = req.body;
    const spotId = await db.Spot.update(
      { photos, price, description, system, planet, region, arrangements },
      { where: { id } }
    );
    const spot = await db.Spot.findByPk(id);

    return res.json({
      spot,
    });
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const spot = await db.Spot.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(req.params.id);
  })
);

module.exports = router;