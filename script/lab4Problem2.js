let num;
let pos;
let neg;
readInput();
function readInput(){
    const pos = [];
    do {
        num = prompt('Enter a negative number');
        num = Number(num);
        if (Number.isInteger(num) && num > 0){
            pos.push(num);
        }
    } while(!Number.isInteger(num) || num >= 0)
    neg = num;
    console.log(pos);
}