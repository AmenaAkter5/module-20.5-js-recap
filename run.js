// simple interest

function simpleInterest(principal, year, rate) {
    var interest = principal * year * rate;
    return interest;
}

var getInterest = simpleInterest(100, 1, 0.05);
console.log(getInterest);