let num;
// let pos;
let neg;
const pos = [];
readInput();
function readInput(){
    do {
        num = prompt('Enter a negative number');
        num = Number(num);
        if (Number.isInteger(num) && num > 0){
            pos.push(num);
        }
    } while(!Number.isInteger(num) || num >= 0)
    displayStatus(pos);
}
function displayStatus(list){
    if (list.length == 0){
        alert('For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0');
    }else{
        let minPos = Math.min.apply(null,list);
        let maxPos = Math.max.apply(null,list);
        let sum = 0;
        pos.forEach(function(no) {
            sum = sum + no
        });
        let avg = sum/pos.length;
        alert(`For the list that is ${pos}, the average is ${avg}, the minimum is ${minPos}, and the maximum is ${maxPos}`);
    }
    
    
}