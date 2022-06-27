const delCart = async (event) => {
    event.preventDefault();
    const id = event.target.value;
    

    const response = await fetch(`/api/cart/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/cart');
    } else {
        alert('Failed to delete item in the cart.');
    }
};

document.querySelectorAll('.deleteCart').forEach((button) => button.addEventListener('click', delCart));

