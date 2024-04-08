export function addToCart(id, title, price, rating, image) {
  return {
    type: "ADD_TO_CART",
    item: {
      id: id,
      title: title,
      price: price,
      rating: rating,
      image: image,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    id: id,
  };
}
