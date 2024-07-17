const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const arrangedRumRouter = require("./arranged_rum/router");
const ingredientArrangedRumRouter = require("./ingredient_arranged_rum/router");
const ingredientRouter = require("./ingredient/router");
const rumRouter = require("./rum/router");

router.use("/arranged_rum", arrangedRumRouter);
router.use("/ingredient_arranged_rum", ingredientArrangedRumRouter);
router.use("/ingredient", ingredientRouter);
router.use("/rum", rumRouter);

/* ************************************************************************* */

module.exports = router;
