var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var countA=0;
var countB=0;
var countC=0;
var countD=0;
var countF=0;

for(i=0; i<scores.length; i++) {
  if(scores[i]>90 && scores[i]<=100) {
    countA++;
  } else if (scores[i]>80 && scores[i]<=90) {
    countB++;
  } else if (scores[i]>70 && scores[i]<=80) {
    countC++;
  } else if (scores[i]>60 && scores[i]<=70) {
    countD++;
  } else if (scores[i]>=0 && scores[i]<=60) {
    countF++;
  } else {
    console.log("Oops, it looks like that is not a valid grade")
  }
}

console.log("There are " + countA + " As, " + countB + " Bs, " + countC + " Cs, " + countD + " Ds, and " + countF + " Fs."); 
console.log("The highest grade is: " + Math.max.apply(null, scores));
console.log("The lowest grade is: " + Math.min.apply(null, scores));
