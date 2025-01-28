let bagPrice=(15599-(10/100*15599))-272;
let jeansPrice=(2499-(41/100*2499))-29;
let bagValue = Math.round((bagPrice+jeansPrice+25+20)*118/100);
let bagSummary=`Your final price of myntra bag ${bagValue}`;
console.log(bagSummary);