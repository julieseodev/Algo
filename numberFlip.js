function numberFlip(n) {
    String(n);
    
    let max = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== 3) {
            n[i] = 3;
        } break;
        n = Math.max(max, Number(n));
    }

    return n;
}


console.log(numberFlip(123)); // 323