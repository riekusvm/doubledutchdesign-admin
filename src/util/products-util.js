import data from '../mock-data.js';

export default {
  getProducts() {
    return data.map((product, index) => {
      return {name: product.type, key: 'p_' + index, id: index};
    });
  },

  getParts(index) {
    if(!data[index].parts) return [];

    return data[index].parts.filter((value, index, arr) => {
      // always return 1st item
      if(index === 0) return true;

      if(value.name !== arr[index-1].name) return true;
      return false;
      // return previous.name != current.name;
    }).map((part, index) => {
      return {name: part.name, key: 'pp_' + part.id, id: part.name};
    });
  },

  getVariants(productId, part) {
    return data[productId].parts.filter((value) => {
      return value.name === part;
    }).map((variant, index) => {
      return {name: variant.description,  key: 'ppv_' + variant.id, id: index}
    });
  }
}
