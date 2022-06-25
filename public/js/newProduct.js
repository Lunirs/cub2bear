async function productFormHandler(event) {
    try {
        event.preventDefault();
        const category = document.querySelector('#category').value.trim();
        const name = document.querySelector('#name').value.trim();
        const price = document.querySelector('#price').value.trim();
        const description = document.querySelector('#description').value.trim();
        const stock = document.querySelector('#stock').value.trim();

        if(!name) {
            alert("Please enter product name.");
        }
        else if(!price) {
            alert("Please enter price");
        }
        else if(!description) {
            alert("Please enter description.");
        }
        else {
          const response = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify({
                category,
                name,
                price,
                description,
                stock
            }),
            headers: { 'Content-Type': 'application/json' }
          });
      
          if (response.ok) {
            document.location.replace('/');
          } else if(response.status == 400) {
            alert(response.json.message);
          } else {
            alert(response.statusText);
          }
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

document.querySelector('.product-form').addEventListener('submit', productFormHandler);