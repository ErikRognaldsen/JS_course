let g1, g2, g3;
let total;
function groceryTracker(){
    g1 = parseFloat(document.getElementById('grocery1').value);
    g2 = parseFloat(document.getElementById('grocery2').value);
    g3 = parseFloat(document.getElementById('grocery3').value);
    total = g1+g2+g3;
    document.getElementById('total').innerText = `The total amount is: ${total} $`   ;
}