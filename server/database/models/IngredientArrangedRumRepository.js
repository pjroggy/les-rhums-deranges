const AbstractRepository = require("./AbstractRepository");

class IngredientArrangedRumRepository extends AbstractRepository {
  constructor() {
    super({ table: "ingredient_arranged_rum" });
  }

  async create(ingredientArrangedRum) {
    console.info(ingredientArrangedRum);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (arranged_rum_id, ingredient_id, quantity) VALUES (?, ?, ?)`,
      [ingredientArrangedRum.arranged_rum_id, ingredientArrangedRum.ingredient_id, ingredientArrangedRum.quantity]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(ingredientArrangedRum) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET arranged_rum_id = ?, ingredient_id = ?, quantity = ? WHERE id = ?`,
      [ingredientArrangedRum.arranged_rum_id, ingredientArrangedRum.ingredient_id, ingredientArrangedRum.quantity, ingredientArrangedRum.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    return result.affectedRows;
  }
}

module.exports = IngredientArrangedRumRepository;
