'use strict';
/*
OBJECT ORIENTED PROGRAMMING (OOP)
~ OOP eshte nje paradigm(Style of code, 'how' ne ta shkruajme dhe ta organizojme kodin) programming e bazuar ne konceptin e objekteve
~ Ne perdorim objektet to model(pershkruajme) real-world(user or todo list item) ose abstrakt features(HTML komponent ose data structures)
~ Objektet mund te permbajne data(properties) dhe code(metodat). Duke perdorur objektet, ne pack data dhe corresponding behavior(sjelljen perkatese) ne nje bllok
~ Ne OOP, objektet jane pieces/blocks of codes self-contained  (te pavarura) 
~ Objektet jane building blocks of applications, dhe interact(nderveprojne) me nje tjeter
~ Interactions ndodhin nepermjet nje Public Interface (API): matodat qe kodi jashte objektit mund te aksesohen dhe perdoren qe te komunikojne me objektin
~ OOP eshte zhvilluar me qellim qe te organizoje kodin, ta beje ate me fleksibel dhe me te lehte per tu menaxhuar

///// HOW DO WE ACTUALLY DESIGN CLASSES??? HOW DO WE MODEL REAL-WORLD DATA INTO CLASSES???
THE 4 FUNDAMENTAL PRINCIPLES OF OOP:
1. ABSTRACTIONS: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implemention
                 (Injorimi ose fshehja e detajeve që nuk kanë rëndësi, duke na lejuar të marrim një perspektivë të përgjithshme të gjësë që po zbatojmë, në vend që të ngatërrohemi me detaje që nuk kanë vërtet rëndësi për zbatimin tonë)

2. ENCAPSULATION: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface(API)
                 (Mbajtja e vetive dhe metodave private brenda klasës, kështu që ato nuk janë të aksesueshme nga jashtë klasës. Disa metoda mund të ekspozohen si një ndërfaqe publike (API))
            WHY? ~ Prevent external code from accidentally manipulating internal properties/state
                (Parandaloni kodin e jashtëm nga manipulimi aksidental i vetive/gjendjes së brendshme)
                ~ Allows to change internal implementation without the risk of breaking external code
                (Lejon ndryshimin e zbatimit të brendshëm pa rrezikun e prishjes së kodit të jashtëm)

3. INHERITANCE: Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
                (Bërja e të gjitha veçorive dhe metodave të një klase të caktuar në dispozicion të një klase fëmijë, duke formuar një marrëdhënie hierarkike midis klasave. Kjo na lejon të ripërdorim logjikën e përbashkët dhe të modelojmë marrëdhëniet në botën reale.)

4. POLYMORPHISM: A child class can overwrite a method it inherited from a parent class[it's more complex that that, but enough for our purposes]
                (Një klasë fëmijë mund të anashkalojë një metodë që trashëgoi nga një klasë prind [është më komplekse se kaq, por mjafton për qëllimet tona])
EXAMPLE: 
//CHILD CLASS
Admin {                                                                 
    user
    password
    email
    permissions
    login(password, key){
     //DIFFERENT LOGIN
    }
    deleteUser(user){
     //DELETING LOGIC
    }
}

//PARENT CLASS
User {
  user
  password
  email
  login(password){
   //LOGIN LOGIC
   }
  sendMessage(str){
   //SENDING LOGIC
    }
}

//CHILD CLASS
Author {
    user
    password
    email
    posts
    login(password){
    //MORE
    writePost() {
    //WRITING LOGIC
        }
}


//// CLASSICAL OOP: CLASSES
 
CLASS 
↓ (INSTANTIATION)
INSTANCE

CLASS (një klasë është si një plan  plan teorik dhe që ne e përdorim për të ndërtuar shumë shtëpi në botën reale, ku theoretical class mund te perdoret per te krijuar objekte aktuale te cilat quhen INSTANCES dhe të cilat më pas mund t'i përdorim në coutin tonë.)


//// OOP IN JAVASCRIPT: PROTOTYPES

         ⤺ Contains methods
PROTOTYPE 
↑
OBJECT ⤾ Can access methods
 
OBJECT are linked to a prototype object (OBJEKT janë të lidhura me një objekt prototip)
PROTOTYPAL INHERITANCE: The prototype contains methods(behavior) that are accessible to all objects linked to that prototype
(TRASHËGIMIA PROTOTIPALE: Prototipi përmban metoda (sjellje) që janë të aksesueshme për të gjitha objektet e lidhura me atë prototip.)
BEHAVIOR is delegated to the linked prototype object.(SJELLJA i delegohet objektit prototip të lidhur.)
EXAMPLE:
 const num = [1, 2, 3];
 num.map(v => v * 2);

 Array.prototype.map() 
                     ⤾ Array.prototype is the prototype of all array objects we create in JavaScript. Therefore, all arrays have access to the map method
                       (Array.prototype është prototipi i të gjitha objekteve të grupit që krijojmë në JavaScript. Prandaj, të gjitha grupet kanë qasje në metodën e hartës)


////// HOW DO WE ACTUALLY CREATE PROTOTYPES??? AND HOW WE LINK OBJECTS TO PROTOTYPES??? HOW CASN WE CREATE NEW OBJECTS, WITHOUT HAVING CLASSES???
➤ CONSTRUCTOR FUNCTIONS (FUNKSIONET E KONSTRUKTORIT)
    ➣ Technique to create objects from a function (Teknika për të krijuar objekte nga një funksion)
    ➣ This is how built-in objects like Arrays, Maps or Sets are actually implemented (Kështu zbatohen në të vërtetë objektet e integruara si Arrays, Maps ose Sets)

➤ ES6 CLASSES (KLASAT ES6)
    ➣ Modern alternative to constructor functions syntax (Alternativa moderne për sintaksën e funksioneve të konstruktorit)
    ➣ 'Syntactic sugar': behind the scenes, ES6 classes work exaxtly like constructor functions ('Sheqeri sintaksor': prapa skenave, klasat ES6 funksionojnë krejtësisht si funksionet e konstruktorit)
    ➣ ES6 classes do NOT behave like classes in 'classical OOP' (Klasat ES6 NUK sillen si klasa në 'OOP klasike')
 
➤ Object.create()
    ➣ The easiest and most straightforward way of linking an object to a prototype object (Mënyra më e lehtë dhe më e drejtpërdrejtë për të lidhur një objekt me një objekt prototip)
*/

//Krijojme nje constructor function per nje person (construction function fillon gjithmone me shkronje te madhe)
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   //NEVER TO THIS (sepse imagjino sikur do te krijojme qindra ose mijera of person objects using constructor function  do kishim mijra kopje te ketij funksioni, e cila do ishte e tmerrshme per kodin)
  //   this.calcAge = function () {
  //     console.log(2023 - birthYear);
  //   };

  // QE TE SOLVE PROBLEM DO PERDORIM PROTOTYPES AND PROTOTYPE INHERITANCE
};
//therrasim funksionin
//e vetmja diference midis regular function dhe constructor function eshte se ne e therrasim constructor function  duke perdorun parashtesen new para
const genta = new Person('Genta', 1996);
console.log(genta);
// Operatori new eshte operator special sepse ben te mundur thirrjen e funksionit por ben me shume se kaq
//1. New empty object {} is created
//2. Function is called, this = {}
//3. {} linked to prototype
//4. Function automatically return {}

const ana = new Person('Ana', 1998);
const florida = new Person('Florida', 1999);
console.log(ana, florida); //output: Person {firstName: 'Ana', birthYear: 1998} Object Person {firstName: 'Florida', birthYear: 1999}

// output: true
console.log(ana instanceof Person);

//nese e bej keshtu do kemi si output: false
const jack = 'Jack';
console.log(jack instanceof Person);
