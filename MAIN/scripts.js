document.addEventListener('DOMContentLoaded', function() {
    const paymentButton = document.getElementById('paymentButton');
    const paymentMessage = document.getElementById('paymentMessage');

    paymentButton.addEventListener('click', function() {
        paymentMessage.textContent = 'Payment Successful';
        paymentMessage.style.color = 'green';
    });
});
