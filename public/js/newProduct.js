async function productFormHandler(event) {
    try {
        event.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const price = document.querySelector('#price').value.trim();
        const description = document.querySelector('#description').value.trim();
        const stock = document.querySelector('#stock').value.trim();

    } catch (err) {
        res.status(500).json(err);
    }
}

document.querySelector('.product-form').addEventListener('submit', productFormHandler);