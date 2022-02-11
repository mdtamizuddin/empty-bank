
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
// alert box 
const alertBox1 = document.getElementById('alert-box1');
// alert box 
const alertBox2 = document.getElementById('alert-box2');
// imported all Id  to Variable

const deposite = document.getElementById('deposite');
const withdraw = document.getElementById('withdraw');
const mainAccount = document.getElementById ('main-account');
const depositeInput = document.getElementById('Deposite-input');
const withdrawInput = document.getElementById('withdraw-input');
  
// Add event listener on The Buttons 
 
document.getElementById("diposite-btn").addEventListener("click", depositeNow); //deposite Button To dipositeNow Function
document.getElementById('withdraw-btn').addEventListener("click", withdrawNow); // Withdraw button To withdrawNow Function
document.getElementById('close-btn1').addEventListener('click', closeBtn1);
document.getElementById('close-btn2').addEventListener('click', closeBtn2);

function depositeNow() {
     const depositeValue = parseInt(deposite.innerText);
     
     

        const depositeNewInput = parseFloat (depositeInput.value);
        if (depositeNewInput > 0) {

        const newdepositeValue = depositeValue + depositeNewInput ;
    
        deposite.innerText = newdepositeValue ;
        //update Main Account balance
    
        const prevMainAccount = parseInt(mainAccount.innerText);
        const newMainAccount = prevMainAccount + depositeNewInput ;
        mainAccount.innerText = newMainAccount ;
     }
     else{
        alertBox1.style.display = "flex";
     }

    depositeInput.value = "";

}

function withdrawNow() {

    const withdrawValue = parseInt(deposite.innerText);
     
     

        const withdrawNewInput = parseFloat(withdrawInput.value);

        const prevMainAccount = parseInt(mainAccount.innerText);
        
        if (withdrawNewInput > 0 && withdrawNewInput <=  prevMainAccount  ) {

        const newWithdarwValue = withdrawValue + withdrawNewInput ;
    
        withdraw.innerText = newWithdarwValue ;
        //update Main Account balance
    
       
        
        const newMainAccount = prevMainAccount - withdrawNewInput ;
        mainAccount.innerText = newMainAccount ;
        withdrawInput.value = "";
     }
     else{
        withdrawInput.value = "";
        alertBox2.style.display = "flex";
     }
     

    

   
}
function closeBtn1() {
    alertBox1.style.display = "none";
    
}

function closeBtn2() {
    alertBox2.style.display = "none";
    
}