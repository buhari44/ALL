//alert('welcome');

const teams=[
    {
        id:1,
        clubName:'wolves',
        totalPlayer:34
    },

    {
       id:2,
       clubName:'chelsea',
       totalPlayer:25
    },
    {
        id:3,
        clubName:'barca',
        totalPlayer:20
    }
]
//const teamwolve=teams[0].totalPlayer
//console.log(teamwolve);
 
const teamJson=JSON.stringify(teams);
console.log(teamJson);

let i=0;
while(i<teams.length){
  console.log(`${teams[i]}`);
  i++
};
//for loops
for(let team of teams){
    console.log(team.id)
};
//for each
teams.forEach(function(team){
     console.log(team.clubName);
});
 //map
const myteam=teams.map(team=>team.clubName)
console.log(myteam);
//filter

const noPlayers=teams.filter(team=>team.totalPlayer>20)
.map(team=>team.clubName)
console.log(noPlayers);

//conditional statement
const name=teams[1].clubName;
 const checkLengthName=name.length>7?clubName.length:'false';
 console.log(checkLengthName);

 color='red';
  switch(color){
      case 'red':
      console.log('this is red');
      break;
    case 'blue':
    console.log('this is blue')
    break;
    default:{
        console.log('non color')
    }
  };
    //function

    function multiply(num1=3,num2=1){
        return num1*num2;
    }
    console.log(multiply());

//arrow function
 const addNum=(num1, num2)=>num1+num2;
 console.log(addNum(2,2));

 //constructor function
  /* function School(schoolName,founder,dob){
       this.schoolName=schoolName;
       this.founder=founder;
       this.dob = new Date(dob);
      
   }
//prototype
   School.prototype.getBirthYear=function(){
       return this.dob;
   };
   School.prototype.getFullName=function(){return `${this.schoolName} ${this.founder}`
};
    School.prototype.class=8;
*/
    //class
    class School{
        constructor(schoolName,founder,dob) {
            this.schoolName=schoolName;
            this.founder=founder;
            this.dob = new Date(dob);
        }
        
        getBirthYear(){
            return this.dob.getFullYear()
        }

        getFullName(){
            return `${this.schoolName} ${this.founder}`
        }
    };
    

   //instantiate object
   const school1=new School('ggs','egbetokun',6-7-1998);
   console.log(school1.schoolName);

   console.log(school1.dob);
   console.log(school1)
   console.log(school1.getBirthYear());
  console.log(school1.getFullName())


 
const inputEvent=document.querySelector('#name')

inputEvent.addEventListener('input' ,updateEvent)

function updateEvent(e){
e.preventDefault();

const p=document.querySelector('p');
p.textContent=inputEvent.value;
}