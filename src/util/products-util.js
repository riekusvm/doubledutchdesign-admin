import _data from '../mock-data.js';

export default class ProductsUtil {
  static data = _data;
  static getProducts() {
    return this.data.map((product, index) => {
      return {name: product.type, key: 'p_' + product.type, id: index};
    });
  }

  static getParts(index) {
    if(!this.data[index] || !this.data[index].parts) return [{}];

    return this.data[index].parts.filter((value, index, arr) => {
      // always return 1st item
      if(index === 0) return true;

      if(value.name !== arr[index-1].name) return true;
      return false;
    }).map((part, index) => {
      return {name: part.name, key: 'pp_' + part.id, id: part.name};
    });
  }

  static getVariants(productId, part) {
    return this.data[productId].parts.filter((value) => {
      return value.name === part;
    }).map((variant, index) => {
      return {name: variant.description,  key: 'ppv_' + variant.id, id: index}
    });
  }
}
