const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const rums = await tables.rum.readAll();
    res.status(200).json(rums);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const rum = await tables.rum.read(req.params.id);
    if (rum == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(rum);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const rum = { ...req.body, id: req.params.id };
  try {
    await tables.rum.update(rum);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const rum = req.body;
  try {
    const insertId = await tables.rum.create(rum);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.rum.delete(req.params.id);
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
