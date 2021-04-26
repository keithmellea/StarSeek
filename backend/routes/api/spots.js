const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const db = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const spots = await db.Spot.findAll();
    return res.json(spots);
}))

module.exports = router;