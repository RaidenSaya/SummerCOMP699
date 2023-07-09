for (i = 1 ; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Marco! Polo!");
    } else if (i % 3 == 0) {
        console.log("Marco!");
    } else if (i % 5 == 0) {
        console.log("Polo!");
    }
}