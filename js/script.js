
document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cashout-section').style.display = 'none';
document.getElementById('send-money-section').style.display = 'none';
document.getElementById('bonus-section').style.display = 'none';
document.getElementById('pay-bill-section').style.display = 'none';
document.getElementById('transaction-section').style.display = 'none';

// add money 
const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
})

// cashout money 
document.getElementById('cashout').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
});

// send money 
document.getElementById('send-money').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'block';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
});

// get bonus
document.getElementById('get-bonus').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'block';
    document.getElementById('transaction-section').style.display = 'none';
});

// pay bill 
document.getElementById('pay-bill').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'block';
    document.getElementById('transaction-section').style.display = 'none';
});

// transaction
document.getElementById('trasaction').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('latest-payment-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('send-money-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transaction-section').style.display = 'block';
});


const selectOption = document.querySelectorAll(".select-option");
for(let i = 0; i < selectOption.length; i++){
    selectOption[i].addEventListener("click", function(){
        for(let j = 0; j < selectOption.length; j++){
            selectOption[j].classList.remove("active");
        }
        selectOption[i].classList.add("active");
    });
}

// add money section 
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const amount = document.getElementById('amount').value;
    const balance = document.getElementById('bdt');
    const totalBallance = parseInt(balance.innerText) + parseFloat(amount);
    const selectBank = document.getElementById("select").value;
    console.log(selectBank);

    if (accountNumber === '' || pinNumber === '' || amount === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(accountNumber) !== 'number' || accountNumber.length !== 11 || parseInt(amount) <= 0) {
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

                    const container = document.getElementById("transaction-section");

                    const div = document.createElement("div");

                    const now = new Date();
                    const formattedDateTime = now.toLocaleString();

                    div.innerHTML = `
                        <div class="bg-white px-5 py-3 rounded-lg flex justify-between items-center hover:shadow-lg transition-all mb-5">
                            <div class="flex justify-between items-center">
                                <img src="./assets/wallet1.png" alt="" class="bg-gray-200 rounded-full w-12 p-1">
                                <div class="flex flex-col ml-5">
                                    
                                    <h4 class="text-lg font-bold">Added Money</h4>
                                    <h1 class="font-bold text-xl">Bank Name: <span class="text-lg font-semiboldbold text-sky-600">${selectBank}</span> </h1>
                                    <p class="text-sm text-gray-500">${amount} &#2547</p>
                                    <p class="text-sm text-gray-500">Account Number: ${accountNumber}</p>
                                    <p class="text-sm text-gray-500 font-semibold">Date & Time: ${formattedDateTime}</p> 
                                </div>

                            </div>
                            <div class="cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    `
                    container.appendChild(div);
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
                        const container = document.getElementById("transaction-section");
                        const div = document.createElement("div");
                        const now = new Date();
                        const formattedDateTime = now.toLocaleString();

                        div.innerHTML = `
                        <div class="bg-white px-5 py-3 rounded-lg flex justify-between items-center hover:shadow-lg transition-all mb-5">
                        <div class="flex justify-between items-center">
                                <img src="./assets/send1.png" alt="" class="bg-gray-200 rounded-full w-12 p-1">
                                <div class="flex flex-col ml-5">
                                    <h4 class="text-lg font-bold">Cashout Money</h4>
                                    <p class="text-sm text-gray-500">${cashoutAmount} &#2547</p>
                                    <p class="text-sm text-gray-500">Aggent Number: ${aggentNumber}</p>
                                    <p class="text-sm text-gray-500 font-semibold">Date & Time: ${formattedDateTime}</p> 
                                </div>

                            </div>
                            <div class="cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    `
                        container.appendChild(div);
                    }

                }
            }

        }
    }

});

// send money section
document.getElementById('send-money-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const personalNumber = document.getElementById('personal-number').value;
    const sendMoneyPinNumber = document.getElementById('send-money-pin-number').value;
    const sendMoneyAmmount = document.getElementById('send-amount').value;
    const convertSendAmount = parseFloat(sendMoneyAmmount);

    const balance = document.getElementById('bdt');

    const sendMoneycharge = 5;
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
                        const container = document.getElementById("transaction-section");
                        const div = document.createElement("div");
                        const now = new Date();
                        const formattedDateTime = now.toLocaleString();

                        div.innerHTML = `
                        <div class="bg-white px-5 py-3 rounded-lg flex justify-between items-center hover:shadow-lg transition-all mb-5">
                        <div class="flex justify-between items-center">
                                <img src="./assets/money1.png" alt="" class="bg-gray-200 rounded-full w-12 p-1">
                                <div class="flex flex-col ml-5">
                                    <h4 class="text-lg font-bold">Send Money</h4>
                                    <p class="text-sm text-gray-500">${sendMoneyAmmount} &#2547</p>
                                    <p class="text-sm text-gray-500">Personal Number: ${personalNumber}</p>
                                    <p class="text-sm text-gray-500 font-semibold">Date & Time: ${formattedDateTime}</p> 
                                </div>

                            </div>
                            <div class="cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    `
                        container.appendChild(div);
                    }

                }
            }

        }
    }

});

// Bonus section 
document.getElementById('bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cuponCode = "de sala 10taka"
    console.log("cupon code is:", cuponCode);

    const ballance = document.getElementById('bdt');




    const cuponcode = document.getElementById('cupon-code').value;


    if (typeof cuponcode !== 'string' || cuponCode === "") {
        alert("Invalid Cupon Code");
    } else {
        if (cuponCode !== cuponCode) {
            alert("Wrong Cupon Code")
        } else {
            alert("You get 10tk bonus");
            const bonusAmmount = 10;
            const totalAmmount = parseInt(ballance.innerText) + bonusAmmount;
            ballance.innerText = totalAmmount;

            const container = document.getElementById("transaction-section");
            const div = document.createElement("div");
            const now = new Date();
            const formattedDateTime = now.toLocaleString();

            div.innerHTML = `
                <div class="bg-white px-5 py-3 rounded-lg flex justify-between items-center hover:shadow-lg transition-all mb-5">
                    <div class="flex justify-between items-center">
                        <img src="./assets/bonus1.png" alt="" class="bg-gray-200 rounded-full w-12 p-1">
                        <div class="flex flex-col ml-5">
                            <h4 class="text-lg font-bold">Bonus Money</h4>
                            <p class="text-sm text-gray-500">${bonusAmmount} &#2547</p>
                            <p class="text-sm text-gray-500">Cupon Code: ${cuponcode}</p>
                            <p class="text-sm text-gray-500 font-semibold">Date & Time: ${formattedDateTime}</p> 
                        </div>

                    </div>
                    <div class="cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            `
            container.appendChild(div);
        }
    }
});

// paybill section
document.getElementById('pay-bill-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // const accountNumber = document.getElementById('account-number').value;
    const payBillNumber = document.getElementById('pay-bill-number').value;
    // const pinNumber = document.getElementById('pin-number').value;
    const payPinNumber = document.getElementById('pay-pin-number').value;
    // const amount = document.getElementById('amount').value;
    const PayAmount = document.getElementById('pay-amount').value;
    const balance = document.getElementById('bdt');
    const totalBallance = parseInt(balance.innerText) - parseFloat(PayAmount);
    const payBillType = document.getElementById("bill-type").value;

    if (payBillNumber === '' || payPinNumber === '' || amount === '') {
        alert('Please fill in all fields');
    } else {
        if (typeof parseInt(payBillNumber) !== 'number' || payBillNumber.length !== 11) {
            alert('Invalid account number');
        } else {
            if (typeof parseInt(PayAmount) !== 'number') {
                alert("Invalid Amount");
            } else {
                if (parseInt(payPinNumber) !== 1234) {
                    alert('Invalid pin number');
                } else {
                    balance.innerText = totalBallance;
                    alert("Pay Bill successfully");
                    const container = document.getElementById("transaction-section");

                    const div = document.createElement("div");

                    const now = new Date();
                    const formattedDateTime = now.toLocaleString();

                    div.innerHTML = `
                <div class="bg-white px-5 py-3 rounded-lg flex justify-between items-center hover:shadow-lg transition-all mb-5">
                    <div class="flex justify-between items-center">
                        <img src="./assets/purse1.png" alt="" class="bg-gray-200 rounded-full w-12 p-1">
                        <div class="flex flex-col ml-5">
                            <h4 class="text-lg font-bold">Pay Bill</h4>
                            <h1 class="font-bold text-xl">Bill Type: <span class="text-lg font-semiboldbold text-sky-600">${payBillType}</span> </h1>
                            <p class="text-sm text-gray-500">You pay: ${PayAmount} &#2547</p>
                            <p class="text-sm text-gray-500">Bill NO: ${payBillNumber}</p>
                            <p class="text-sm text-gray-500 font-semibold">Date & Time: ${formattedDateTime}</p> 
                        </div>

                    </div>
                    <div class="cursor-pointer">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            `
                    container.appendChild(div);

                }
            }

        }
    }

});
