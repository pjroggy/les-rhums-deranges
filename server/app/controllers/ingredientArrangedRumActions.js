const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const ingredientArrangedRums = await tables.ingredient_arranged_rum.readAll();
    res.status(200).json(ingredientArrangedRums);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const ingredientArrangedRum = await tables.ingredient_arranged_rum.read(req.params.id);
    if (ingredientArrangedRum == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(ingredientArrangedRum);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const ingredientArrangedRum = { ...req.body, id: req.params.id };
  try {
    await tables.ingredient_arranged_rum.update(ingredientArrangedRum);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const ingredientArrangedRum = req.body;
  try {
    const insertId = await tables.ingredient_arranged_rum.create(ingredientArrangedRum);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.ingredient_arranged_rum.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
