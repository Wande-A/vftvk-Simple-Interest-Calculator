function validateForm() { // This validates the form using the classic if condition
    var x = document.getElementById("principal").value;
        if (x <= 0) {
            alert("Enter a positive number")
            return false
        }
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+
",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "
+amount+",\<br\>in the year "+year+"\<br\>"
}

function shldYouCmpt() {
    if (validateForm() != false) {
        compute()
    }
}

function updateRate() //This calculates the drag across input style and writes the value in front 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
    document.getElementById("result").innerHTML=rateval
    
}
/* This how to 
write a multi-line comment in JS*/
    
        