const connection = require("../app/database");

class ProductService {
  async create(name, stock) {
    const statement = `INSERT INTO products
    (name, stock, createdAt, updatedAt)
    VALUES(?, ?, now(),now());
    `;
    const [result] = await connection.execute(statement, [
      name,
      stock,
    ]);
    return result;
  }

  async update(id, name, stock) {
    const statement = `UPDATE products SET name = ? ,stock=?, updatedAt = now() WHERE id = ?`;
    const [result] = await connection.execute(statement, [
      name,
      stock,
      id,
    ]);
    return result;
  }

  async remove(id) {
    const statement = `DELETE FROM products WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }


  async getProducts() {
    const statement = `SELECT  * from products    `;
    const [result] = await connection.execute(statement);
    return result;
  }

  async getProductsByName(name) {
    const statement = `SELECT  * from products  WHERE name = ?   `;
    const [result] = await connection.execute(statement, [name]);
    return result;
  }
}

module.exports = new ProductService();
