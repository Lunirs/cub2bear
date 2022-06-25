const deleteProduct = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#product-id').value;

  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to delete product.');
  }
};

document.querySelector('.delBtn').addEventListener('click', deleteProduct);
