const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

//Get All Bookings
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const bookings = await db.Booking.findAll();
    return res.json(bookings);
  })
);

module.exports = router;
