
/*
this is for multiple line comments
 
console.log('HelloWorld!!!');
var firstName ='john';
console.log(firstName);

var lastName ='smith';
var age = 28;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

job='teacher';
console.log(job);
// this are variable rules
var _3years = 53;
console.log( _3years);
 var John_mark='john and mark';
console.log(John_mark);
/** 
 type coercion
*/
/** 
var firstName ='shashi';
var age = 25;
console.log(firstName+ '  ' +age);

var job, isMarried;
job = 'teacher';
isMarried = 'false';
console.log(firstName+ ' is a ' + age + 'years old ' + job +' is she married? ' + isMarried );
// mutation  mutation
age = 'twentyfive';
job = 'driver';
alert(firstName + ' is  a ' + age + ' years old   ' +  job  + ' is she married? ' + isMarried );

// console.log(firstName + ' is  a ' + age + ' years old   ' +  job  + ' is she married? ' + isMarried );
var lastName =prompt('what is here last name?' );
console.log(firstName +' ' + lastName);
*/
// //  Basic operators
// var year, yearjohn , yearshashi;
// now = 2020;
// yearjohn = now-20;
// console.log(yearjohn);
// // maths operators
// yearjohn = now-20;
// yearshashi = now-5;
// console.log(yearshashi);
// console.log(now*2 );
// console.log( now+2);
// console.log( now/2);
// // logical operator
// agejohn = 28;
// ageshashi = 25;
// var johnolder = agejohn > ageshashi;
// console.log(johnolder);
// console.log(typeof johnolder);
// console.log(typeof ageshashi);
// console.log(typeof 'this is shashi here');
// var x ;
// console.log(typeof x);
// // operator precedence
// var now = 2018;
// var yearjohn =2015;
// var fullAge = 21;
// var isFullAge =now - yearjohn>= fullAge;
// console.log(isFullAge);
// // grouping operators
// var agejohn = now-yearshashi ;
// var ageshashi = 35;
// var average =(agejohn + ageshashi) / 2;
// console.log(average);

// // multiple operator
// var x,y;
// x=y=(3*4+4-2);
// console.log(x, y);
// // more operator
// x*=2;
// console.log(x);
// x =x*2;
// console.log(x);
// x+=2;
// console.log(x);
// x--;
// console.log(x)
// // coding task
//  var Markmass =75 //in kg
// var Markheight = 1.69;  // in meters

// var johnmass =65;// in kg
// var johnheight =1.34;// in meters
// BmiMark = Markmass/( Markheight*Markheight );
// Bmijohn = johnmass/( johnheight*johnheight );
// console.log(BmiMark,Bmijohn);
// var markHigher = (BmiMark >  Bmijohn);
// console.log('is mark bmi is higher then john?'+ markHigher );
// // if and else statement
// var firstName = 'john';
// var civilstatus ='single';
// if ( civilstatus === 'married')
// {
//     console.log(firstName+ ' '+'is married');
// }
// else{
//     console.log(firstName+ ' '+ 'will be married soon')
// }
// // another method
// var isMarried = true;
// if ( isMarried)
// {
//     console.log(firstName+ ' '+'is married');
// }
// else{
//     console.log(firstName+ ' '+ 'will be married soon')   
// }
// // boolean statements
// var firstName = 'shashi';
// var age = 13;
// if
// ( age<=13 && age<20 )
// {
//   console.log (firstName + ' is an girl');  
// // }
// else if
// ( age>=13 && age>20)
// {console.log(firstName + 'is a young women ');
// }
// else {
//  console.log(firstName + 'is a women');
// }
// // ternary operator
// var firstName = 'john ';
// var age= 20;
// var drink = age<20 ? 'drink':'juice';
// console.log(firstName+' consumed ' + drink);  

// switch case statement
// var firstName = 'john ';
// var job = 'driver';
// switch (job)
// {
//     case 'teacher':
//         console.log(firstName + 'teaches to the students');
//         break;
//     case 'driver' :
//         console.log(firstName + 'diver used to drives vechiles');
//         break;
//     default:
//         console.log (firstName+ 'is doing something else') ;      
// }
var height;
height=235;//in meters
if(height){
    console.log('variable is defined');
}
else{
    console.log('variable is not defined');
}
 if (height == '23');
{
    console.log('the == opertor does the type coercion');
}
if (height === '23')
{ 
    console.log('the == opertor does the type coercion');
}

function calculateAge(birthyear)
{ return 2018-birthyear ;
}
var ageharry=calculateAge(1990);
console.log( ageharry);
var agejohn=calculateAge(1989);
console.log(agejohn);
// array initaialization
var names = ['jons','shashi', 'ram','seema'];
console.log(names);
console.log(names [2]);
console.log(names[0]);
console.log(names.length);
// mutated array data
names[1] ='ben';
names[2] ='abc';
console.log(names);
names[names.length] ='harry';
names[names.length] ='neha';
console.log(names); 
// different datatypes
var john =['john','smith',1997,'teacher',false];
john.push('blue');
john.unshift('mr');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf('smith'));
console.log(john.indexOf(23));
var isdesigner =john.indexOf('designer') === -1 ? 'john is not a designer': 'john is designer';
console.log( isdesigner);
// objects and propertise
var shashi= {
    firstName:'shashi',
    lastName:'yadav',
    birthyear:1997,
    family:['mother','father','brother'] ,
    job:'teacher',
    isMarried:false
};
console.log(shashi);
console.log(shashi.job);
console.log(shashi.lastName);
console.log(shashi['firstName']);
var x ='birthyear';
console.log(shashi[x]);
shashi.job ='designer';
shashi['isMarried']=true;
console.log(shashi);
// new object  syntax
var john= new Object();
john.name='john';
john.birthyear=1996;
console.log(john);







    

























