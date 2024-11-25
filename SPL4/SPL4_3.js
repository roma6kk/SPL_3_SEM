let cart = new Map();

function addProduct(id, name, quantity, price) {
  if (cart.has(id)) {
    console.log(`Товар с id ${id} уже существует.`);
  } else {
    cart.set(id, { name, quantity, price });
    console.log(`Товар "${name}" добавлен с id ${id}.`);
  }
}

function removeProductById(id) {
  if (cart.has(id)) {
    cart.delete(id);
    console.log(`Товар с id ${id} удален.`);
  } else {
    console.log(`Товар с id ${id} не найден.`);
  }
}

function removeProductsByName(name) {
  let initialSize = cart.size;
  
  for (let [id, product] of cart) {
    if (product.name === name) {
      cart.delete(id);
    }
  }
  
  if (initialSize !== cart.size) {
    console.log(`Товары с названием "${name}" удалены.`);
  } else {
    console.log(`Товары с названием "${name}" не найдены.`);
  }
}

function updateProductQuantity(id, newQuantity) {
  if (cart.has(id)) {
    let product = cart.get(id);
    product.quantity = newQuantity;
    cart.set(id, product);
    console.log(`Количество товара с id ${id} изменено на ${newQuantity}.`);
  } else {
    console.log(`Товар с id ${id} не найден.`);
  }
}

function updateProductPrice(id, newPrice) {
  if (cart.has(id)) {
    let product = cart.get(id);
    product.price = newPrice;
    cart.set(id, product);
    console.log(`Цена товара с id ${id} изменена на ${newPrice}.`);
  } else {
    console.log(`Товар с id ${id} не найден.`);
  }
}

function getTotalItems() {
  console.log(`Общее количество позиций в корзине: ${cart.size}`);
  return cart.size;
}

function getTotalCost() {
  let totalCost = 0;
  
  for (let product of cart.values()) {
    totalCost += product.quantity * product.price;
  }
  
  console.log(`Общая стоимость товаров в корзине: ${totalCost}`);
  return totalCost;
}


addProduct(1, 'Яблоки', 5, 20);
addProduct(2, 'Бананы', 2, 50);
addProduct(3, 'Апельсины', 10, 15);
addProduct(4, 'Яблоки', 7, 20);  

updateProductQuantity(1, 10); 
updateProductPrice(2, 45); 

removeProductById(3);  

removeProductsByName('Яблоки'); 

getTotalItems();  
getTotalCost();   
