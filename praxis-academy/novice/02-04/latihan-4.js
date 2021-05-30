function power(n) {
    for (let current = n;; current *= n){
        yield current;
    }
}

for (let power of powers(4)){
    if (power > 50) break;
    console.log(powers);
}