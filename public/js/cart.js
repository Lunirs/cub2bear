const addCart = async (event) => {
  console.log('hi do you work?');
  const addItem = {
    quantity: 1,
    product_id: event.target.value,
  };

  console.log(addItem);

  const response = await fetch('/api/cart', {
    method: 'POST',
    body: JSON.stringify(addItem),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status) {
    alert("The item is added to cart successfully");
  } else {
    alert("Failed to add the item into the cart.");
  }
};

document
  .querySelectorAll('.addToCartBtn')
  .forEach((button) => button.addEventListener('click', addCart));
