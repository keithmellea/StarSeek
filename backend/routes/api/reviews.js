const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const reviews = await db.Review.findAll({
      where: {
        spotId: req.params.id,
      },
    });
    return res.json(reviews);
  })
);

router.delete(
  "/:id",
  asyncHandler(async function (req, res) {
    const booking = await db.Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(req.params.id);
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    let reviewId = parseInt(req.params.id, 10);
    let review = await db.Book.findByPk(reviewId);
   // const { cover, title, author, published, description } = req.body;
    await review.update(req.body);
  })
);

router.post("/", asyncHandler(async function (req, res) {
    const newReview = await db.Review.create(req.body);
    return res.json(newReview);
  })
);

module.exports = router;
