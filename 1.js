// JavaScript for Flower Order Website

// Select the order form
const orderForm = document.querySelector("form");

// Event listener for form submission
orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const flower = document.getElementById("flower").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    // Validate form data
    if (!name || !email || !flower || !quantity || !address) {
        alert("Please fill out all fields.");
        return;
    }

    // Generate a random 6-digit order ID
    const orderId = Math.floor(100000 + Math.random() * 900000);

    // Create order object
    const order = {
        orderId,
        name,
        email,
        flower,
        quantity,
        address,
        status: "Pending"
    };

    // Store order in local storage (simulation)
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Show confirmation popup
    alert(`Thank you for your order!\nYour Order ID is: ${orderId}`);

    // Clear form fields
    orderForm.reset();
});