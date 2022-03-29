const service = require('../service/product.service.js');

class ProductController {
  async create(ctx, next) {
    const { name, stock } = ctx.request.body;
    const result = await service.create(name, stock);
    ctx.body = result;
  }

  async update(ctx, next) {
    const { id } = ctx.params;
    const { name, stock } = ctx.request.body;
    console.log(id,name, stock);
    const result = await service.update(id, name,stock);
    ctx.body = result;
  }

  async remove(ctx, next) {
    const { id } = ctx.params;
    const result = await service.remove(id);
    ctx.body = result;
  }

  
  async list(ctx, next) {
      const result = await service.getProducts();
      ctx.body = result;
    
  }

    
  async listByName(ctx, next) {
    const { name } = ctx.params;
      const result = await service.getProductsByName(name);
      ctx.body = result;
    
  }

}

module.exports = new ProductController();