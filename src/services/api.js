export async function getCategories() {
  // Implemente aqui https://api.mercadolibre.com/sites/MLB/categories
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return response.json();
}

export async function getProductFromId(productId) {
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  return response.json();
}

export function getProductsFromLocalStorage() {
  if (localStorage.getItem('cartItems')) {
    return JSON.parse(localStorage.getItem('cartItems'));
  }
  return undefined;
}

export function setProductsFromLocalStorage(newItem) {
  const newItemstr = JSON.stringify(newItem);
  localStorage.setItem('cartItems', newItemstr);
}
