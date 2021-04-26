const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const { Spots } = require('../../db/models/spot');
const router = express.Router();


router.get('/spots', asyncHandler(async (req, res) => {
    const spots = await Spots.findAll();
    console.log("spots");
    return res.json(spots);
}))

module.exports = router;