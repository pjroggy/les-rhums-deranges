const AbstractRepository = require("./AbstractRepository");

class RumRepository extends AbstractRepository {
  constructor() {
    super({ table: "rum" });
  }

  async create(rum) {
    console.info(rum);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, origin) VALUES (?, ?)`,
      [rum.name, rum.origin]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT rum.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", arranged_rum.id,
            "name", arranged_rum.name
          )
        ) as arranged_rums FROM ${this.table}
        LEFT JOIN arranged_rum ON arranged_rum.rum_id = rum.id
        WHERE rum.id = ?
        GROUP BY rum.id`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(rum) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, origin = ? WHERE id = ?`,
      [rum.name, rum.origin, rum.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    return result.affectedRows;
  }
}

module.exports = RumRepository;
