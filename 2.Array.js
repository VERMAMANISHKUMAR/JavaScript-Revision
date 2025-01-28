const array=[1,3,5,5,6,7,8,9];
console.log(array.length);

const studentdetals=[ 'manish',2000, 'music'];
console.log(studentdetals);

const arr = new Array('raahul',2000,'cricket');
console.log(arr);
//       methads in array
//  Adding the element
// push()
const teams =['CSK','RCB' ,'MI','LSG' ];
teams.push('GT');
console.log(teams);

//unshift

teams.unshift('KKR');
console.log(teams);

//Removing the element
//pop()

teams.pop();
teams.pop();
console.log(teams);

//Chech the element is present or not
    // Indexof()
    const RCBIndex=teams.indexOf('MI');
    console.log(RCBIndex);

     //Includes()

     const rcbIncludes=teams.includes('RCB');
     console.log(rcbIncludes);

     //Slice()
       console.log(teams);
       console.log(teams.slice(-2));
       console.log(teams);

       //Splice()
       teams.splice(2,1,'GT','LSG','A','B');
       console.log(teams) ;
          
       //Concat()

       const team2=['India','pakishtan','New zealand'];
       const mergedTeams=teams.concat(team2);
       console.log(mergedTeams);