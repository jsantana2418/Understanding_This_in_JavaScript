function foo(){
  console.log("hello global call");
  console.log(this);
}
foo();

//
var thisObject = {
  callingThisObject: function(){
    console.log("this object of course");
    console.log(this);
  }
}
thisObject.callingThisObject();

//creating objects from a constructor
function CreatePerson(fn, ln, age){
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;
  this.print = function(add){
    this.age += add || 0;
    console.log("this new function object call: " + this.firstName + " "
                + this.lastName + " is " + this.age + " years old." );
  }
}
var jose = new CreatePerson("Jose", "Santana", 31);

var andy = new CreatePerson("Andy", "Santana", 30);

var tsunade = new CreatePerson("Tsunade", "Santana", 11);

//display all constructed object with one function call and binding
//'this' to invoke the proper reference to that object
function DisplayUser(name){
  this.displayer = name;
}
var andres = new DisplayUser("andres");
andres.print = jose.print;
andres.print.call(jose);
andres.print.call(andy);
andres.print.call(tsunade, 10);
