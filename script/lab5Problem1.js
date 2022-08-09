let num;
function isPositive(){
    // while (true){
    //     num = prompt('Enter a positive number');
    //     console.log('sadad');
    //     num = Number(num);
    //     if ( Number.isInteger(num) && num>0){
    //         showPrime(num);
    //         break;
    //     }
    // }
    do {
        num = prompt('Enter a positive number');
        num = Number(num);
    } while (!Number.isInteger(num) || num <= 0)
    showPrime(num);
}
function showPrime(n){
    let prime = '';
    for(let i = 2;i < n; ++i){
        if(isPrime(i)) {
            prime = prime +`${i},`;
            continue;
        }
    }
    let total = prime.slice(0,-1);
    alert(`For n = ${num} prime number are ${total}`);
}
function isPrime(n) {
    for (let j= 2; j < n ; j++){
        if(n%j == 0) return false;
    }
    return true;
}