// /*............................Assignemnt 21 - 25 ................*/
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
//   text += a[i] + "<br>";
// }
// document.write(text) ;
// document.write(s)
// if (text==s){
//     document.write("yes")
// }else{
//     document.write("no")
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

// /*............................Assignemnt 26 - 30 ................*/
// // /*Question 1 */
// document.write("................................Question 1........................"+"<br>"+"<br>")
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

















