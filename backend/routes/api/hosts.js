const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const db = require("../../db/models");
const router = express.Router();


router.get(
  "/",
  asyncHandler(async (req, res) => {
    const hosts = await db.Host.findAll();
    return res.json(hosts);
  })
);

module.exports = router;