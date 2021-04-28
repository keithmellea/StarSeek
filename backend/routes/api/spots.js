const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

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
    const userId = req.session.auth.userId;
    const user = await db.User.findByPk(userId);
    const { checkIn, checkOut, location, host } = req.body;
    const date = `${checkIn} - ${checkOut}`

    const newBooking = await db.Booking.create({location, host, date })
    res.json({ newBooking });
}))


module.exports = router;