function placeOrder(event, dishName) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target; // Get the form element
    const formData = new FormData(form); // Create FormData object from form

    // You can process the form data here (e.g., send it to the server using AJAX)
    // For demonstration purposes, let's log the data to the console
    console.log("Placing order for:", dishName);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    
    // Reset the form after processing
    form.reset();
}



