//when the user submits
function pay() {
   
    if(document.getElementById("output-total").value == 0.00){
        alert("Enter an Amount");
    }
    else {
         alert("You payment has been processed. Thank you for dinning with us. Please come again.");
    }
}

//Shows the percentage and 
function calculate() {

    //variables input
    let tipRange = document.getElementById("tip-range").value;
    let amount = Number(document.getElementById("amount").value);
    //prints the percent value to screen
    percent(tipRange);
    
    //VARIABLES OUTPUT 
    let totalTip = document.getElementById("output-justTip");
    let totalAmountTip = document.getElementById("output-total");

    //calculates the totals and dispalys
    let tip = (tipRange / 100)
    totalTip.value = Number(amount * tip).toFixed(2);
    totalAmountTip.value= Number(amount + Number(totalTip.value)).toFixed(2);

    //displays Block
    display();
}

function calcper(){
    let txt = (document.getElementById("range-print").value);
    document.getElementById("tip-range").value = (txt) ;
   console.log (txt.value = (document.getElementById("tip-range").value))
    display();
}

//Displays percentages
function percent(x) {
    let p = document.getElementById("range-print");
    p.value = (x )

}

//displays values 
function display() {
    //show the results when the tip is interacted with
    let results = document.getElementById("output-area");
    results.style.display = "block";
}