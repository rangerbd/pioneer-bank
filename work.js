const btn=document.getElementById("login");

btn.addEventListener("click",function(){
    const frontArea=document.getElementById("front-page");
    frontArea.style.display="none";
    const transecArea = document.getElementById("transection-area");
    transecArea.style.display = "block";
    
})


// deposit button handlar
const depositBtn=document.getElementById("addDeposit");

depositBtn.addEventListener("click",function(){
    
    const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);



    const currentDeposit=document.getElementById("currentDeposit").innerText;
    const depositamount=parseFloat(currentDeposit);
    const total = depositamount+depositNumber;

    document.getElementById("currentDeposit").innerText = total;
    document.getElementById("depositAmount").value="";

    
    const balance=document.getElementById("balance").innerText;
    const totalBalance=parseFloat(balance);
    const final= totalBalance+depositNumber;

    document.getElementById("balance").innerText=final;


// withdraw button handler
    
    
    const withdraw=document.getElementById("withdraw");
    withdraw.addEventListener("click",function(){
        
        const withdrawAmount= document.getElementById("withdrawAmount").value;
        const withdrawNumber=parseFloat(withdrawAmount);

        const totalWithdraw=document.getElementById("totalWithdraw").innerText;
        const totalwAmount=parseFloat(totalWithdraw);
        const totalwCurrency= totalwAmount+withdrawNumber;

        document.getElementById("totalWithdraw").innerText=totalwCurrency;
        document.getElementById("balance").innerText=final-totalwCurrency;



    })
    

})
