var a = ;
var b = ;
var c = ;

if(a > b && a > c){
    console.log(a*=10)
    if (c > b){
        console.log(c*=5)
    } else {
        console.log(b*=5)
    }
}

if(b > c && b > a){
    console.log(b*=10)
    if (c > a){
        console.log(c*=5)
    } else {
        console.log(a*=5)
    }
}

if(c > a && c > b){
    console.log(c*=10)
    if (a > b){
        console.log(a*=5)
    } else {
        console.log(b*=5)
    }
}
