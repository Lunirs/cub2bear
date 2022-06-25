async function productFormHandler(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
  const description = document.querySelector('#description').value.trim();
  const stock = document.querySelector('#stock').value.trim();
  let category_id;

  if (document.querySelector('#category_1:checked')) {
    category_id = 1;
  } else if (document.querySelector('#category_2:checked')) {
    category_id = 2;
  } else if (document.querySelector('#category_3:checked')) {
    category_id = 3;
  } else if (document.querySelector('#category_4:checked')) {
    category_id = 4;
  } else if (document.querySelector('#category_5:checked')) {
    category_id = 5;
  }

  const response = await fetch('/api/products', {
    method: 'POST',
    body: JSON.stringify({
      name,
      price,
      description,
      stock,
      category_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(
      'Could not add new product listing. Please check your fields and make sure everything is fille dout.'
    );
  }
}

document
  .querySelector('.product-form')
  .addEventListener('submit', productFormHandler);
