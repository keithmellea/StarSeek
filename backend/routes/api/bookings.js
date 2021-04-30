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

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const booking = await db.Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(req.params.id);
  })
);
module.exports = router;
