
const messageAlert= document.getElementById('message-alert');

function loginNow() {
 const emailFeild = document.getElementById('email-feild');
 const passwordFeild = document.getElementById('password-feild');
 if (emailFeild.value == 'tomiz@gmail.com' && passwordFeild.value == 'nai') {
     window.location.href = '/dashboard.html';
     messageAlert.innerText = 'Thanks For Giver Correct information';
 }
 else{
     messageAlert.innerText = 'Plz Giver Correct information';
 }
};

// Dashboard page 

// imported all Id  to Variable

const deposite = document.getElementById('deposite');
const withdraw = document.getElementById('withdraw');
const mainAccount = document.getElementById ('main-account');
const depositeInput = document.getElementById('Deposite-input');
const withdrawInput = document.getElementById('withdraw-input');
  
// Add event listener on The Buttons 
 
document.getElementById("diposite-btn").addEventListener("click", depositeNow); //deposite Button To dipositeNow Function
document.getElementById('withdraw-btn').addEventListener("click", withdrawNow); // Withdraw button To withdrawNow Function

function depositeNow() {
     const depositeValue = parseInt(deposite.innerText);
     
     const depositeNewInput = parseInt (depositeInput.value)
    const newdepositeValue = depositeValue + depositeNewInput ;

    deposite.innerText = newdepositeValue ;
    //update Main Account balance

    const prevMainAccount = parseInt(mainAccount.innerText);
    const newMainAccount = prevMainAccount + depositeNewInput ;
    mainAccount.innerText = newMainAccount ;


    depositeInput.value = "";

}

function withdrawNow() {

     const withdrawValue = parseInt(withdraw.innerText);
     
     const withdrawNewInput = parseInt (withdrawInput.value)
    const newWithdarwValue = withdrawValue + withdrawNewInput ;
    withdraw.innerText = newWithdarwValue;
     // main account after withdraw 

    const prevMainAccount = parseInt(mainAccount.innerText);
    const newMainAccount = prevMainAccount - withdrawNewInput ;
    mainAccount.innerText = newMainAccount ;

    withdrawInput.value = "";
}
