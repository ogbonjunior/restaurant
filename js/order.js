function showOrderForm(dishName) {
    document.getElementById('selectedDish').value = dishName;
    document.getElementById('orderForm').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideOrderForm() {
    document.getElementById('orderForm').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleOrderSubmit(event) {
    event.preventDefault();
    
    const formData = {
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        selectedDish: document.getElementById('selectedDish').value,
        quantity: document.getElementById('quantity').value,
        deliveryLocation: document.getElementById('deliveryLocation').value,
        deliveryTime: document.getElementById('deliveryTime').value,
        additionalMessage: document.getElementById('additionalMessage').value
    };
    
    alert('Commande envoyée avec succès !\n\nDétails de la commande:\n' +
          'Plat: ' + formData.selectedDish + '\n' +
          'Quantité: ' + formData.quantity + '\n' +
          'Client: ' + formData.customerName + '\n' +
          'Téléphone: ' + formData.customerPhone + '\n' +
          'Lieu de livraison: ' + formData.deliveryLocation + '\n' +
          'Heure de livraison: ' + formData.deliveryTime);
    
    hideOrderForm();
    document.getElementById('orderFormElement').reset();
}