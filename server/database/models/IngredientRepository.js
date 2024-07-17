const AbstractRepository = require("./AbstractRepository");

class IngredientRepository extends AbstractRepository {
  constructor() {
    super({ table: "ingredient" });
  }

  async create(ingredient) {
    console.info(ingredient);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, unit) VALUES (?, ?)`,
      [ingredient.name, ingredient.unit]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT ingredient.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", ingredient_arranged_rum.arranged_rum_id,
            "quantity", ingredient_arranged_rum.quantity
          )
        ) as arranged_rums FROM ${this.table}
        LEFT JOIN ingredient_arranged_rum ON ingredient_arranged_rum.ingredient_id = ingredient.id
        WHERE ingredient.id = ?
        GROUP BY ingredient.id`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(ingredient) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, unit = ? WHERE id = ?`,
      [ingredient.name, ingredient.unit, ingredient.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    return result.affectedRows;
  }
}

module.exports = IngredientRepository;
