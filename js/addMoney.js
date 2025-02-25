

document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cashout-section').style.display = 'none';
document.getElementById('send-money-section').style.display = 'none';


const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('add-money').classList.add('active');
    document.getElementById('cashout').classList.remove('active');
    document.getElementById('send-money').classList.remove('active');
})

document.getElementById('cashout').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('add-money').classList.remove('active');
    document.getElementById('cashout').classList.add('active');
    document.getElementById('send-money').classList.remove('active');
});


document.getElementById('send-money').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'block';
    document.getElementById('add-money').classList.remove('active');
    document.getElementById('cashout').classList.remove('active');
    document.getElementById('send-money').classList.add('active');
});




// add money section 
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const amount = document.getElementById('amount').value;
    const balance = document.getElementById('bdt');
    const totalBallance = parseInt(balance.innerText) + parseFloat(amount);

    if (accountNumber === '' || pinNumber === '' || amount === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(accountNumber) !== 'number' || accountNumber.length !== 11) {
            alert('Invalid account number');
        } else {
            if (typeof parseInt(amount) !== 'number') {
                alert("Invalid Amount");
            } else {
                if (parseInt(pinNumber) !== 1234) {
                    alert('Invalid pin number');
                } else {
                    balance.innerText = totalBallance;
                    alert("money added successfully");
                }
            }

        }
    }

});


// cashout section 

document.getElementById('cashout-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const aggentNumber = document.getElementById('aggent-number').value;
    const pinNumber = document.getElementById('cashout-pin-number').value;

    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertCashoutAmount = parseFloat(cashoutAmount);
    const balance = document.getElementById('bdt');
    const cashOutcharge = convertCashoutAmount * (1.75 / 100);
    const totalCashout = convertCashoutAmount + cashOutcharge;
    const totalBallance = parseInt(balance.innerText) - totalCashout;




    if (aggentNumber === '' || pinNumber === '' || amount === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(aggentNumber) !== 'number' || aggentNumber.length !== 11) {
            alert('Invalid account number');
        } else {
            if (typeof parseInt(cashoutAmount) !== 'number' || parseInt(cashoutAmount) <= 0) {
                alert("Invalid Amount");
            } else {
                if (parseInt(pinNumber) !== 1234) {
                    alert('Invalid pin number');
                } else {
                    if (convertCashoutAmount > parseFloat(balance.innerText)) {
                        alert("No more money for cashout")
                    } else {
                        balance.innerText = totalBallance;
                        alert("Cashout successfully");
                    }

                }
            }

        }
    }

});




// send money section
document.getElementById('send-money-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // const aggentNumber = document.getElementById('aggent-number').value;
    const personalNumber = document.getElementById('personal-number').value;
    // const pinNumber = document.getElementById('cashout-pin-number').value;
    const sendMoneyPinNumber = document.getElementById('send-money-pin-number').value;

    // const cashoutAmount = document.getElementById('cashout-amount').value;
    const sendMoneyAmmount = document.getElementById('send-amount').value;
    const convertSendAmount = parseFloat(sendMoneyAmmount);

    const balance = document.getElementById('bdt');

    const sendMoneycharge =  5;
    const totalSendMoney = convertSendAmount + sendMoneycharge;
    const totalBallance = parseInt(balance.innerText) - totalSendMoney;




    if (personalNumber === '' || sendMoneyPinNumber === '' || sendMoneyAmmount === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(personalNumber) !== 'number' || personalNumber.length !== 11) {
            alert('Invalid account number');
        } else {
            if (typeof parseInt(sendMoneyAmmount) !== 'number' || parseInt(sendMoneyAmmount) <= 0) {
                alert("Invalid Amount");
            } else {
                if (parseInt(sendMoneyPinNumber) !== 1234) {
                    alert('Invalid pin number');
                } else {
                    if (convertSendAmount > parseFloat(balance.innerText)) {
                        alert("No more money for send Money")
                    } else {
                        balance.innerText = totalBallance;
                        alert("Send Money successfully");
                    }

                }
            }

        }
    }

});