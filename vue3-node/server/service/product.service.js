const connection = require("../app/database");

class ProductService {
  async create(name, stock) {
    const statement = `INSERT INTO products
    (name, stock, createdBy, createdAt, updatedBy, updatedAt)
    VALUES(?, ?, 'Mae', now(), 'Mae', now());
    `;
    const [result] = await connection.execute(statement, [name, stock]);
    return result;
  }

  async update(id, name, stock) {
    const statement = `UPDATE products SET name = ? ,stock=?,updatedBy='yu', updatedAt = now() WHERE id = ?`;
    const [result] = await connection.execute(statement, [name, stock, id]);
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
    let nameSearch = "%" + name + "%";
    const statement = `SELECT  * from products  WHERE name like ?  `;
    const [result] = await connection.execute(statement, [nameSearch]);
    return result;
  }
}

module.exports = new ProductService();
