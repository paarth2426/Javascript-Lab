// Target DOM Elements
const customerNameInput = document.getElementById('customerName');
const productNameInput = document.getElementById('productName');
const productQtyInput = document.getElementById('productQty');
const productPriceInput = document.getElementById('productPrice');
const generateBtn = document.getElementById('generateBtn');
const billOutput = document.getElementById('billOutput');

// Constant for GST Rate
const GST_RATE = 0.18;

// Add click trigger to button
generateBtn.addEventListener('click', generateBill);

function generateBill() {
    // Retrieve values from the fields
    const customerName = customerNameInput.value.trim();
    const productName = productNameInput.value.trim();
    const quantity = parseInt(productQtyInput.value);
    const pricePerUnit = parseFloat(productPriceInput.value);

    // Simple validation rule
    if (!customerName || !productName || isNaN(quantity) || quantity <= 0 || isNaN(pricePerUnit) || pricePerUnit < 0) {
        alert('Please fill out all fields with valid information.');
        return;
    }

    // Mathematical breakdown
    const subtotal = quantity * pricePerUnit;
    const gstAmount = subtotal * GST_RATE;
    const finalTotal = subtotal + gstAmount;

    // Display raw text block output
    billOutput.innerHTML = `
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Item Purchased:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Price per Unit:</strong> ${pricePerUnit.toFixed(2)}</p>
        <hr style="border: 0; border-top: 1px dashed #ccc; width: 50%; margin: 10px 0;">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>GST (18%):</strong> ${gstAmount.toFixed(2)}</p>
        <p><strong>Final Total: $</strong> ${finalTotal.toFixed(2)}</p>
    `;
}
