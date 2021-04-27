const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const db = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const spots = await db.Spot.findAll();
    return res.json(spots);
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const spot = await db.Spot.findByPk(id);
    return res.json(spot);
  })
);
module.exports = router;