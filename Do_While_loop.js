let randomNum =8;
let guessedNum;
do{
          guessedNum =prompt('Gussed the Number');
          if(guessedNum == randomNum){
                    console.log('Guess Correctly !!');
          }else{
                    console.log('Take another number');
          }

}while(guessedNum !=randomNum);