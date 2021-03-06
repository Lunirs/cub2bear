const editCart = async (event) => {
    event.preventDefault();
    const id = event.target.value;
    const quantity = document.querySelector("[id='" + id + "']").value;

    let response;

    if(quantity == 0) {
        response = await fetch(`/api/cart/${id}`, {
            method: 'DELETE',
        });
    } else {
        response = await fetch(`/api/cart/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, quantity }),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (response.status == 200) {
        alert("Cart item is updated")
        document.location.replace('/cart');
    } else if (response.status == 401) {
        alert("You can't have more than stock of the item in the cart.");
    } else {
        alert("Failed to update item in the cart. Not enough stock of the item or the item doesn't exit anymore");
    }
};

document.querySelectorAll('.editCart').forEach((button) => button.addEventListener('click', editCart));