// /*............................Assignemnt 21 - 25 ..........................*/
// // /*Question 1 */
// document.write("................................Question 1........................"+"<br>"+"<br>")
// var a = prompt( "Enter your first name !")
// var b = prompt( "Enter your seccond name !")
// var fullNmae = a +" "+b
// document.write("Hellow ! "+fullNmae)







// /*Question  2*/
// document.write("................................Question 2........................"+"<br>"+"<br>")
// var mobile = prompt( " Enter yoru  favorite mobile phone model !")
// var l=mobile.length
// var upper =mobile.toUpperCase()
// document.write("My favorite mobile phone model is "+upper+"<br>")
// document.write("The lenght of the string is "+l)







// /*Question  3*/
// document.write("................................Question 3........................"+"<br>"+"<br>")
// var p = "pakistani"
// var inde = p.indexOf("n")
// document.write("String : Pakistani"+"<br>")
// document.write("Index of 'n' : "+inde)







/*Question  4*/
// document.write("................................Question 4........................"+"<br>"+"<br>")
// var p = "Hello World"
// var inde = p.lastIndexOf("l")
// document.write("String : Hellow World"+"<br>")
// document.write("Index of 'l' : "+inde)







// /*Question  5*/
// document.write("................................Question 5........................"+"<br>"+"<br>")
// var p = "pakistani"
// var inde = p[3]
// document.write("String : Pakistani"+"<br>")
// document.write("character at Index : "+inde)






// // /*Question 6 */
// document.write("................................Question 6........................"+"<br>"+"<br>")
// var a = prompt( "Enter your first name !")
// var b = prompt( "Enter your seccond name !")
// var c=a+" "
// var fullNmae = c.concat(b)
// document.write("Hellow ! "+fullNmae)







/*Question  7*/
// document.write("................................Question 7........................"+"<br>"+"<br>")
// var p = "Hyderbad"
// var repl= p.replace("hyder","Islama")
// document.write("City : "+p+"<br>")
// document.write("After replacement : "+repl)







/*Question  8*/
// document.write("................................Question 8........................"+"<br>"+"<br>")
// var message ="“Ali and Sami are best friends. They play cricket and ootball together."
// var repl = message.replace("and","&")
// document.write(repl)





/*Question  9*/
// document.write("................................Question 9........................"+"<br>"+"<br>")
// var s = 472
// var conv = s.toString()
// document.write ("Value : "+s+"<br>" )
// document.write("Type : "+typeof conv)





/*Question  10*/
// document.write("................................Question 10........................"+"<br>"+"<br>")
// var c = prompt("Enter the input to convert in captal letter !")
// var conv = c.toUpperCase()
// document.write ("User input : "+c+"<br>" )
// document.write("Upper case : "+ conv)






/*Question  11*/
// document.write("................................Question 11........................"+"<br>"+"<br>")
// var c = prompt("Enter the input to convert in title letter !")
// var conv = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
// document.write ("User input : "+c+"<br>" )
// document.write("Upper case : "+ conv)






/*Question  12*/
// document.write("................................Question 12........................"+"<br>"+"<br>")
// var num = 35.36
// var result = num[2]
// document.write ("Number : "+num+"<br>" )
// document.write("Result : "+result)







/*Question  13*/
// document.write("................................Question 13........................"+"<br>"+"<br>")
// var uName =prompt("Enter a user name !")
// var a=0
// for (var i =0; i < uName.length; i++){
//   var slic=uName.slice(i, i+1)
//   if( slic=== "@"||slic=== "!"||slic=== "."||slic=== ","){
//      a++
//      if(a==1){
//       document.write("enter a valid name !")
//       break
//     }     
//   }
// }
// if(a < 1 ){
//   document.write("The user name is correct! "+uName)
// }
// else{
//   document.write("enter a valid name !")
// }





/*Question  14*/
// document.write("................................Question 14........................"+"<br>"+"<br>")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var s = prompt("Enter to search !")
// var text = "";
// var i;
// for (i = 0; i < a.length; i++) {
// text=a[i]
// if (s===text){
//     document.write()
//      var r =a.indexOf(s.toLowerCase())
//     document.write(s+" is available at index "+r+" in our bakery")
//     break
// }else{
//     document.write("no")
// }
// }






/*Question  16*/
// document.write("................................Question 16........................"+"<br>"+"<br>")
// var university ="University of Karachi"
// var l = university.length
// var ll = university.charAt(1)
// for(var i =0; i<l; i++){
//   var v = university.charAt(i);
//   document.write(v+ "<br>")
// }




/*Question  17*/
// document.write("................................Question 17........................"+"<br>"+"<br>")
// var user = "pakistan"
// var i = user.length-1
// document.write(user[i])





/*Question  18*/
// document.write("................................Question 18........................"+"<br>"+"<br>")
// var text ="the quick brown fox jumps over the lazy dog"
// var a=0
// for (var i =0; i < text.length; i++){
//   if(text.slice(i, i+3) === "the"){
//      a++
//   }
// }
// document.write("Text : the quick brown fox jumps over the lazy dog"+ "<br>")
// document.write("There are "+a+ " occurance(s) of word 'the' ")









/*Question 8 */
// document.write("................................Question 8........................"+"<br>"+"<br>")
// var integ = prompt( "Enter a positive integer !")
// var round = Math.round(integ);
// var flor =Math.floor(integ);
// var ceil = Math.ceil(integ);
// document.write("Number :"+ integ+ "<br>")
// document.write("Round :"+ round+ "<br>")
// document.write("Floor :"+ flor+ "<br>")
// document.write("Ceil :"+ ceil+ "<br>")






// // /*Question 2 */
// document.write("................................Question 2........................"+"<br>"+"<br>")
// var integ = prompt( "Enter a nagative floating point !")
// if (integ<0){
// var round = Math.round(integ);
// var flor =Math.floor(integ);
// var ceil = Math.ceil(integ);
// document.write("Number :"+ integ+ "<br>")
// document.write("Round :"+ round+ "<br>")
// document.write("Floor :"+ flor+ "<br>")
// document.write("Ceil :"+ ceil+ "<br>")
// }
// else{
//   document.write("Enter a nagative floating point!")
// }





// // /*Question 3 */
// document.write("................................Question 3........................"+"<br>"+"<br>")
// var absol = prompt("Enter a value !")
// var val1 =(absol)*(-1)
// document.write("Th absolute vale of "+absol+" is "+val1)





// // /*Question 4 */
// document.write("................................Question 4........................"+"<br>"+"<br>")
// var r = Math.random(6);
// var round= Math.round(r)
// document.write("Random dice value is : "+round) 



// /*Question 5 */
// document.write("................................Question 5........................"+"<br>"+"<br>")
// var r = Math.random(2)*2
// var toss=Math.round(r)
//  if (toss===2){
//      document.write("Random coin value : Heads")
//  }
//  else if(toss===0){
//      toss+1
//     document.write("Random coin value : Tails")
//     }else{
     
//     document.write("Random coin value : Taais")
//  }






/*Question 6 */
// document.write("................................Question 6........................"+"<br>"+"<br>")
// var r = Math.random()*100
// var rand=Math.round(r)
// document.write("Random Number between 1 to 100 is : "+rand)






/*Question 7 */
// document.write("................................Question 7........................"+"<br>"+"<br>")
// var w = prompt("Enter your weight ! (in kilograms)")
// var p = parseInt(w)
// document.write ("The weitht of the user is "+p+" kilograms")







/*Question 8 */
// document.write("................................Question 8........................"+"<br>"+"<br>")
// var inp= prompt(" Enter a number between 1 to 10 !")
// var r = Math.random()*10
// var rand=Math.round(r)
// document.write("Random number is : "+rand+"<br>")
// if (inp === rand){
//     document.write("You enter a correct number!")
// }else{
//     document.write("Try again !")
// }





// /*............................Assignemnt 31 - 34 ..........................*/
// // /*Question 1 */
// document.write("................................Question 1........................"+"<br>"+"<br>")
// var datee= new Date;
// document.write(datee)




/*Question 2 */
// document.write("................................Question 2........................"+"<br>"+"<br>")
// var month;
// switch (new Date().getDay()) {
//   case 1:
//     month = "January";
//     break;
//   case 2:
//     month = "Fabuary";
//     break;
//   case 3:
//     month = "March";
//     break;
//   case 4:
//     month = "April";
//     break;
//   case 5:
//     month = "May";
//     break;
//   case  6:
//     month = "June";
//   case 7:
//     month = "Junly";
//     break;
//   case 8:
//     month = "Autusg";
//     break;
//   case 9:
//     month = "Septmber";
//     break;
//   case 10:
//     month = "October";
//     break;
//   case 11:
//     month = "November";
//     break;
//   case 12:
//     month = "December";
//     break;
// }
// document.write("Today current is : "+month)







/*Question 3 */
// document.write("................................Question 3........................"+"<br>"+"<br>")
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.write("Today is : "+day)










/*Question 4 */
// document.write("................................Question 4........................"+"<br>"+"<br>")
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.write("Today is : "+day+"<br>")

// if(day==="Saturday"||day==="Sunday"){
//     document.write("It's fun day !")
// }






// // /*Question 5 */
// document.write("................................Question 5........................"+"<br>"+"<br>")
// var datee= new Date;
// var dd= datee.getUTCDate()
// if (dd<16){
//     document.write("First fifteen days")
// }else{
//     document.write("Last days of the month")
// }










// /*Question 6 */
// document.write("................................Question 6 ........................"+"<br>"+"<br>")
// var date= new Date;
// var d = date
// var ds= date.getMilliseconds()
// var dmm = date.getMinutes()
//     document.write("Current date : "+d+"<br>")
//     document.write("Elaps millisecond since january 1 , 1970 "+ds+"<br>")
//     document.write("Elaps minutes since january 1 , 1970 "+dmm+"<br>")









// /*Question 7 */
// document.write("................................Question 7........................"+"<br>"+"<br>")
// var date= new Date;
// var dd= date.toString()
// var tim= dd.slice(15,34)
// document.write("Current time is : "+tim+"<br>")
// var a = dd.slice(15,18)
// if (a<12){
//     document.write("It's PM")
// }else{
//     document.write("It's AM")
// }









// /*Question 8 */
// document.write("................................Question 8........................"+"<br>"+"<br>")
// var date= new Date("dec 31,2020");
// var a = date.getUTCDate()
// document.write(a)







// /*Question 9 */
// document.write("................................Question 9........................"+"<br>"+"<br>")
// var date= new Date("Apr 25,2015");
// var datemili = date.getTime()
// var tody = new Date()
// var todymili = tody.getTime()
// var diff = todymili - datemili
// var coifday= diff/(1000*60*60*24)
// var r = Math.floor(coifday)
// document.write(r+" days have passed since 1 Ramazan 2015")




/*Question 10 */
// document.write("................................Question 10........................"+"<br>"+"<br>")
// var date= new Date("jan 1,2015");
// var datemili = date.getTime()
// var tody = new Date("dec 05, 2015")
// var todymili = tody.getTime()
// var diff = todymili - datemili
// var coifday= diff/(1000*60)
// document.write(coifday+" seconds has been passed since beginning of 2015 ")






/*Question 13 */
// document.write("................................Question 13........................"+"<br>"+"<br>")
// var date= new Date("nov 16,1998");
// var datemili = date.getTime()
// var tody = new Date()
// var todymili = tody.getTime()
// var diff = todymili - datemili
// var coifday= diff/(1000*60*60*24*30*12 )
// var r = Math.floor(coifday)
// document.write(" Your age is : "+r)







/*Question 14 */
// document.write("................................Question 14........................"+"<br>")
// document.write("................................ K-Electric bill ........................"+"<br>"+"<br>")
// var a = prompt("Enter the costumer name !")
// var month;
// switch (new Date().getDay()) {
//   case 1:
//     month = "January";
//     break;
//   case 2:
//     month = "Fabuary";
//     break;
//   case 3:
//     month = "March";
//     break;
//   case 4:
//     month = "April";
//     break;
//   case 5:
//     month = "May";
//     break;
//   case  6:
//     month = "June";
//   case 7:
//     month = "Junly";
//     break;
//   case 8:
//     month = "Autusg";
//     break;
//   case 9:
//     month = "Septmber";
//     break;
//   case 10:
//     month = "October";
//     break;
//   case 11:
//     month = "November";
//     break;
//   case 12:
//     month = "December";
//     break;
// }
// var b = prompt("Enter Number of unit !")
// var c= 16 //charges per unit
// var net = b*c
// var gros = net+350
// document.write("<br>"+"Costumer Name : "+a+"<br>")
// document.write("Month :"+month+"<br>")
// document.write("Number of Unit "+b+"<br>")
// document.write("Chargers per unit 16"+"<br>")
// document.write("Net Amount Payable (within Due Date) : "+net+"<br>")
// document.write("Late Payment Surcharge : 350"+"<br>")
// document.write("Gross Amount Payable (after Due Date) : "+gros+"<br>")







// /*............................Assignemnt 31 - 34 ............................*/
// // /*Question 1 */
// function date(){
//  document.write("................................Question 1........................"+"<br>"+"<br>")
//  var datee= new Date;
//  document.write(datee)
// }
// document.write(date())






// // /*Question 2 */
// function greet(){
//     document.write("................................Question 2........................"+"<br>"+"<br>")
//     var a = prompt( "Enter your first name !")
//     var b = prompt( "Enter your seccond name !")
//     var fullNmae = a +" "+b
//     document.write("Hellow ! "+fullNmae)
// }
// document.write(greet());





 /*Question 3 */
// function sum(a,b){
//     document.write("................................Question 3........................"+"<br>"+"<br>")
//     return (a+b)
// }
// var a= prompt("enter the first num !")
// var b= prompt("enter the second num !")
// document.write(sum(a,b))








 /*Question 4 */
// function cal(n1,n2,op){
// document.write("................................Question 4........................"+"<br>"+"<br>")
//   if (op=="+") {
//     var sum=n1+n2
//     document.write("Result : "+sum+"<br>")    
// }
//   if (op=="-") {
//     var sum=n1-n2
//     document.write("Result : "+sum+"<br>")    
// }
//   if (op=="*") {
//     var sum=n1*n2
//     document.write("Result : "+sum+"<br>")    
// }
//   if (op=="/") {
//     var sum=n1/n2
//     document.write("Result : "+sum+"<br>")    
// }
//  }
// var n1= prompt("Enter the first number !")
// var n2 = prompt("Enter your second nmber !")
// var op = prompt("Enter your OPERATOR !")
// document.write(cal(n1,n2,op))







 /*Question 5 */
// function square(a){
//     document.write("................................Question 5........................"+"<br>"+"<br>")
//     var s = a*a
//     return s
// }
// var a= prompt("enter the first num !")
// document.write("Square of the number is : "+square(a))





 /*Question 6 */
// function fac(a){
//   document.write("................................Question 6........................"+"<br>"+"<br>")
//   var fact = 1
//   for(var i=1; i<=a; i++){
//   fact= fact*i;
//   }
//   return (fact)
// }
// var a= prompt("enter the first num !")
// document.write("Factorial of the number is : "+fac(a))







 /*Question 7 */
// function print(a,b){
//     document.write("................................Question 7........................"+"<br>"+"<br>")
//     for (var i=a; i <= b; i++) {
//       document.write(i+"<br>")
//      }        
// }
// var a= prompt("enter the first num !")
// var b= prompt("enter the last num !")
// document.write(print(a,b))





 /*Question 8 */
// function square(a){
//     var s = a*a
//     return s
// }
// function hyp(a,b){
//   document.write("................................Question 8........................"+"<br>"+"<br>")
//   var hypo = square(a) + square(b)
//   return hypo
// }
// var a= prompt("enter the first num !")
// var b= prompt("enter the first num !")
// document.write(" hypotenuse of a right angle triangle : "+hyp(a,b))





 /*Question 9 */
// function area(a,b=6){
// document.write("................................Question 9........................"+"<br>"+"<br>")
//   var are =  a*b 
//   return are
// }
// var b= prompt("enter the first num !")
// document.write(" Area of a rectangle : "+area(b))







 /*Question 14 */
// function CircumferenceOfCircle(a){
// document.write("................................Question 14........................"+"<br>"+"<br>")
//   var cir =  (2*3.142*a)
//   return cir
// }
// var b= prompt("enter the radius !")
// document.write(" Area of a rectangle : "+CircumferenceOfCircle(b))


// function AreaferenceOfCircle(a){
//   document.write("................................Question 14........................"+"<br>"+"<br>")
//     var are =  3.142*(a*a)
//     var sqe =Math.sqrt(are)
//     return sqe
//   }
//   var c= prompt("enter the radius !")
//   document.write(" Area of a rectangle : "+AreaferenceOfCircle(c))
  






function LongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){ 
        longestWord = strSplit[i].length; 
         }
    return longestWord;

        }
    }
document.write(LongestWord("Web Development Tutorial"))





