var a = 30;
var b = 10;
var c = 20;

if (a > b){
    if(a > c){
        console.log('the largest = a', a*=10);
        if(c > b){
            console.log('c is middle', c*=5);
        } else {
            console.log('b is middle', b*=5);
        }
    } else {
        console.log('the largest = c', c*=10);
        console.log('b is middle', b*=5);
    }
} else {
    if(b > c){
        console.log('the largest = b', b*10);
        if (a > c){
            console.log('a is middle', a*=5);
        } else {
            console.log('c is middle', c*=5);
        }
    } else {
        console.log('the largest = c', c*10);
        console.log('b is middle', b*=5);
    }
}