// login section 

/*
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const pinNumber = document.getElementById('pin-number').value;

    if (accountNumber === '' || pinNumber === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(accountNumber) !== 'number' || accountNumber.length !== 11) {
            alert('Invalid account number');
        } else {
            if (parseInt(pinNumber) !== 1234) {
                alert('Invalid pin number');
            } else {
                window.location.href = 'main.html';
            }
        }
    }

});

*/