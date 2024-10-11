document.getElementById('restaurant-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cuisine = document.getElementById('cuisine').value;
    const description = document.getElementById('description').value;

    if (!name || !email || !phone || !address || !cuisine || !description) {
        alert('Please fill in all required fields.');
        return;
    }

    alert('Restaurant added successfully!');
});
