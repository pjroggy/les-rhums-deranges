const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const arrangedRums = await tables.arranged_rum.readAll();
    res.status(200).json(arrangedRums);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const arrangedRum = await tables.arranged_rum.read(req.params.id);
    if (arrangedRum == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(arrangedRum);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const arrangedRum = { ...req.body, id: req.params.id };
  try {
    await tables.arranged_rum.update(arrangedRum);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const arrangedRum = req.body;
  try {
    const arrangedRumId = await tables.arranged_rum.create(arrangedRum);
    const insertId = await tables.ingredient_arranged_rum.create(arrangedRumId, arrangedRum.ingredientId, arrangedRum.quantity);
    res.status(201).json({ success: true, insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.arranged_rum.delete(req.params.id);
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
