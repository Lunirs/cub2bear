const addCart = async (event) => {
  const addItem = {
    quantity: 1,
    product_id: event.target.value,
  };

  const response = await fetch('/api/cart', {
    method: 'POST',
    body: JSON.stringify(addItem),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status == '200') {
    alert('The item is added to cart successfully');
  } else if (response.status == '401') {
    alert('You already have maximum stock of the item in the cart.');
  } else {
    alert('Failed to add the item into the cart.');
  }
};

document
  .querySelectorAll('.addToCartBtn')
  .forEach((button) => button.addEventListener('click', addCart));
