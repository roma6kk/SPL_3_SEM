let productSet = new Set();

function addProduct(product) {
  productSet.add(product);
  console.log(`Товар "${product}" добавлен.`);
}

function removeProduct(product) {
  if (productSet.has(product)) {
    productSet.delete(product);
    console.log(`Товар "${product}" удален.`);
  } else {
    console.log(`Товар "${product}" не найден.`);
  }
}

function hasProduct(product) {
  if (productSet.has(product)) {
    console.log(`Товар "${product}" имеется в наличии.`);
    return true;
  } else {
    console.log(`Товара "${product}" нет в наличии.`);
    return false;
  }
}

function getProductCount() {
  console.log(`Общее количество товаров: ${productSet.size}`);
  return productSet.size;
}


addProduct('Яблоки');
addProduct('Апельсины');
addProduct('Бананы');
addProduct('Яблоки');

hasProduct('Бананы');
removeProduct('Апельсины');
hasProduct('Апельсины');  

getProductCount();  
