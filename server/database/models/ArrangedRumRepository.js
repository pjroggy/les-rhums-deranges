const AbstractRepository = require("./AbstractRepository");

class ArrangedRumRepository extends AbstractRepository {
  constructor() {
    super({ table: "arranged_rum" });
  }

  async create(arrangedRum) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, rum_id) VALUES (?, ?)`,
      [arrangedRum.name, arrangedRum.rumId]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT arranged_rum.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", ingredient.id,
            "name", ingredient.name,
            "unit", ingredient.unit,
            "quantity", ingredient_arranged_rum.quantity
          )
        ) as ingredients,
          JSON_OBJECT(
              "id", rum.id,
              "name", rum.name,
              "origin", rum.origin
           ) as rum 
        FROM ${this.table}
        LEFT JOIN ingredient_arranged_rum ON ingredient_arranged_rum.arranged_rum_id = arranged_rum.id
        LEFT JOIN ingredient ON ingredient.id = ingredient_arranged_rum.ingredient_id
        LEFT JOIN rum ON rum.id = arranged_rum.rum_id
        WHERE arranged_rum.id = ?
        GROUP BY arranged_rum.id, rum.id`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(arrangedRum) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, illustration = ?, rum_id = ? WHERE id = ?`,
      [
        arrangedRum.name,
        arrangedRum.illustration,
        arrangedRum.rum_id,
        arrangedRum.id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = ArrangedRumRepository;
