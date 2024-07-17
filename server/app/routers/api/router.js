const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const arrangedRumRouter = require("./arranged_rum/router");
const ingredientArrangedRumRouter = require("./ingredient_arranged_rum/router");

router.use("/items", itemsRouter);
router.use("/arranged_rum", arrangedRumRouter);
router.use("/ingredient_arranged_rum", ingredientArrangedRumRouter);

/* ************************************************************************* */

module.exports = router;
