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

/*
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

//////////////// PROTOTYPES ////////////////

Cdo funksion ne JS automatikisht ka nje property e cila quhet prototype ku perfshijne constructor function.
Tani cdo objekt qe eshte krijuar nga nje constructor function i caktuar  do te kete akses ne te gjitha metodat dhe propertite që përcaktojmë në property prototype constructor.


//pra te gjitha objektet qe jane krijuar permes this constructor function do te trashegohen, pra do i japim akses tek te gjitha metodat dhe properties qe jane peracktuar ne kete prototype property.
// le te shtojme tani nje metode te kesaj constructor function.

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
//Pra, me pak fjalë, kjo është mënyra se si ne zbatojmë prototypal inheritance në JavaScript dhe praktikë.
//Por si dhe pse funksionon kjo në të vërtetë?
//Epo, funksionon sepse çdo objekt gjithmonë ka qasje në metodat dhe properties nga prototipi i tij. Dhe prototipi i Jonas dhe Matilda është person dot prototype.
//Dhe ne në fakt mund ta konfirmojmë këtë sepse çdo objekt ka një veti të veçantë që quhet underscore underscore proto.
// Pra underscore underscore proto dhe serish underscore underscore

genta.calcAge();
ana.calcAge();
florida.calcAge();
console.log(genta.__proto__); //kjo shfaq ne console vetem prototype, pra nuk eshte prototype property
console.log(genta.__proto__ === Person.prototype); //output: true

console.log(Person.prototype.isPrototypeOf(genta)); //output: true
console.log(Person.prototype.isPrototypeOf(ana)); //output: true
console.log(Person.prototype.isPrototypeOf(Person)); //output: false

//Pra, a nuk duhet të jetë person dot prototype dot prototype of person,
//Dua të them që kjo prototype property  këtu nuk duhet të jetë prototype of person?? Epo, në fakt, jo.
//person dot prototype aktualisht nuk eshte the prototype of person. Por ne vend te kesaj , është ajo që do të përdoret si prototip i të gjitha objekteve që krijohen me person constructor function.
//Pra, ky është një ndryshim delikat, por i rëndësishëm që duhet ta kemi parasysh.
//Pra, ne sapo pamë se prototipi i genta, i cili është ky,(genta.__proto__) është prototype property prototipi of the person constructor function(Person.prototype)

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(genta.species, ana.species); //output: Homo Sapiens Homo Sapiens
console.log(genta.hasOwnProperty('species')); //output: false

/*
/////////////// HOW PROTOTYPAL INHERITANCE / DELEGATION WORKS  /////////////// 
Tani ky constructor function ka nje prototype property që është një objekt dhe brenda atij objekti, ne përcaktuam metodën calcAge dhe vete person dot prototype 
në fakt ka gjithashtu një reference back to person which is the constructor property.Pra, në thelb person dot prototype dot constructor do t'i drejtohet vetë personit.
Tani mbani mend, prototype dot person në fakt nuk është prototype of person, por i të gjitha objekteve që krijohen përmes person function dhe duke folur 
për objektet e krijuara, le të analizojmë tani në fakt se si krijohet një objekt duke përdorur operatorin new dhe constructor function.

~ Hapi 1: Pra, kur thërrasim një funksion, çdo funksion me operatorin new, gjëja e parë që do të ndodhë është që një objekt i ri bosh të krijohet në çast. 
~ Hapi 2: Pastaj this keyword dhe thirrja e funksionit vendoset në objektin e krijuar rishtazi. 
Pra, brenda kontekstit të ekzekutimit të funksionit ky është tani objekti i ri bosh dhe kjo është arsyeja pse në kodin e funksioneve ne vendosim properties e 
name dhe të birthYear  do t'i vendosim ato në objektin e ri.
~ Hapi 3: Pra, tani objekti i ri është i lidhur (linked) tek constructor functions prototype property. Në këtë rast, person dot prototype. Dhe kjo ndodh nga brenda duke shtuar në objektin
 e ri vetinë kryesore nënvizuese, nënvizuese.  Pra, person dot prototype është tani prototipi i ri i objekteve i cili shënohet në pronësinë e underscore, underscore proto property of Genta. 
 Pra, përsëri, underscore proto gjithmonë tregon një object prototype dhe kjo është e vërtetë për të gjitha objektet në JavaScript.
~ Hapi 4: Dhe më në fund new object kthehet automatikisht nga funksioni nëse nuk kthejmë në mënyrë eksplicite diçka tjetër.Rezultati i operatorit new dhe person construction function
 eshte nje objekt i ri që sapo e krijuam në mënyrë programore dhe që tani ruhet në variablin Genta dhe i gjithë ky  proces që sapo shpjegova është se si funksionon me CONSTRUCTOR FUNCTION
 dhe gjithashtu me ES6 CLASSES dhe gjithashtu me klasat ES6 por jo me object dot create (object.create) syntax  që do ta përdorim më vonë. 

 //// genta.calcAge();
Këtu po përpiqemi të thërrasim funksionin calcAge në objektin genta. Megjithatë, Në fakt nuk mund ta gjejë funksionin calcAge drejtpërdrejt në objektin genta.
Nëse një property ose një metodë nuk mund të gjendet në një objekt të caktuar, JavaScript do të shikojë në prototipin e tij dhe ja ku është. Te prototype kemi dhe calcAge: function
Pra, ekziston funksioni calcAge që po kërkonim dhe kështu JavaScript përdore këtë. Kjo është mënyra se si funksioni calcAge mund të funksionojë saktë dhe të kthejë një rezultat. 
Dhe sjellja që sapo përshkruam është ajo që ne tashmë e quajtëm trashëgimi prototipale ose delegim. Pra objekti genta trashëgoi metodën calcAge nga prototipi i tij ose me fjalë
të tjera ai delegoi funksionalitetin calcAge në prototipin e tij. Tani, e bukura e kësaj është se ne mund të krijojmë sa më shumë objekte të personit që duam dhe të gjithë ata do
ta trashëgojnë këtë metodë. Kështu që ne mund ta quajmë këtë metodë calcAge për të gjithë objektet e personit pa u bashkangjitur drejtpërdrejt metoda me të gjithë vetë objektet 
dhe kjo është thelbësore për performancën e kodit. Thjesht imagjinoni që ne kishim 1000 objekte në kod dhe nëse të gjithë do të duhej të mbanin funksionin calcAge, 
atëherë kjo sigurisht që do të ndikonte në performancën.

console.log(genta.hasOwnProperty('firstName')); //output: true
console.log(genta.__proto__.__proto__);
/*
//Cfare shikojme ne output 
Shikojme qe constructor eshte nje objekt, shikojme metoden hasOwnProperty e cila ka property e vet.
Prandaj ne thirrim hasOwnProperty of genta

{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()


console.log(genta.__proto__.__proto__.__proto__); //output: null sepse object.property eshte zakonisht ne krye te scope chain
console.dir(Person.prototype.constructor);

//MENDOJME NJE ARRAY
const arr = [3, 6, 4, 5, 6, 9, 3]; //new Array === []
console.log(arr); //output: (7) [3, 6, 4, 5, 6, 9, 3]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //output: true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); //output: (5) [3, 6, 4, 5, 9]

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

/////// CHALLENGE 1 //////////////
/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
// SIPAS MEJE
console.log('--- PIKA 1 ---');
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);
console.log(`${car1.make} going at ${car1.speed} km/h`);

const car2 = new Car('Mercedes', 95);
console.log(`${car2.make} going at ${car2.speed} km/h`);

console.log('--- PIKA 2 ---');
const carAccelerate = {
  accelerate() {
    console.log(`${car1.make} going at ${car1.speed + 10} km/h`);
    console.log(`${car2.make} going at ${car2.speed + 10} km/h`);
  },
};

const carBMW = Object.create(carAccelerate);
carBMW.accelerate();

// console.log(`${car1.make} going at ${car1.speed + 10} km/h`);
// console.log(`${car2.make} going at ${car2.speed + 10} km/h`);

console.log('--- PIKA 3 ---');
const carBrake = {
  brake() {
    console.log(`${car1.make} going at ${car1.speed - 5} km/h`);
    console.log(`${car2.make} going at ${car2.speed - 5} km/h`);
  },
};

const carMercedes = Object.create(carBrake);
carMercedes.brake();
// console.log(`${car1.make} going at ${car1.speed - 5} km/h`);
// console.log(`${car2.make} going at ${car2.speed - 5} km/h`);

console.log('--- PIKA 4 ---');
const car1Object = {
  accelerate() {
    console.log(`${car1.make} going at ${car1.speed + 10} km/h`);
  },

  brake() {
    console.log(`${car1.make} going at ${car1.speed - 5} km/h`);
  },
};
car1Object.accelerate();
car1Object.brake();

const car2Object = {
  accelerate() {
    console.log(`${car2.make} going at ${car2.speed + 10} km/h`);
  },

  brake() {
    console.log(`${car2.make} going at ${car2.speed - 5} km/h`);
  },
};

car2Object.accelerate();
car2Object.brake();
car2Object.accelerate();
car2Object.accelerate();
car2Object.brake();

/* SIPAS VIDEOS dhe kshu duhet sepse rritet dissa here shpejtesia sa here qe e therret ndersa mua nuk me behej

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

//////////////////// ES6 CLASSES  ////////////////////

//class expression
// const PersonCl = class {}
/*
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //kete metoden me poshte eshte e rendesishme ta shkruajme brenda klases dhe jashte constructor dhe me pas automatikisht do shtohet ne prototype property of class
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge(); //27

console.log(jessica.__proto__ === PersonCl.prototype); //true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode
*/
//////////////////// SETTERS AND GETTERS //////////////////////////////
/*
/// EXAMPLE 1
const account = {
  owner: 'Genta',
  movements: [200, 530, 120, 300],

  //latest eshte si nje property
  get latest() {
    //per ta transformuar ne nje marresh perdorim fjalen get
    return this.movements.slice(-1).pop(); //pra do ktheje nje array ne last position dhe per ta hequr nga array perdorim metoden pop
  },

  set latest(mov) {
    //tani bejme dhe nje levizje, qe do shfaqim array bashke dhe me indeksin qe do shtojme me komanden set
    this.movements.push(mov);
  },
};

console.log(account.latest); //output: 300
account.latest = 50;

console.log(account.movements); // output: [200, 530, 120, 300, 50]

//// EXAMPLE 2
class Person1 {
  constructor(fullName, birthYear) {
    //Instance properties
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge1() {
    console.log(2023 - this.birthYear);
  }
  greet1() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  //How to fix qe ne console kur klikojme psh genu.fullName te dali emer dhe mbiemer, pasi si genu._fullName njihet (pra te njihet per te dyja versionet)
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey = function () {
    console.log('Hey there');
    console.log(this);
  };
}
const genu = new Person1('Genu Hoxha', 1996);
console.log(genu);
genu.calcAge1();
console.log(genu.age);
console.log(genu.__proto__ === Person1.prototype);
genu.greet1();
const ani = new Person1('Ani Hoxha', 1998);
Person1.hey();
*/
/*
///////////////////////////////////// STATIC METHODS //////////////////////////////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const genta = new Person('Genta', 1996);
console.log(genta);
const ana = new Person('Ana', 1998);
console.log(genta instanceof Person);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};
Person.hey(); //output: Hey there

genta.hey(); //output: do dali error sepse hey nuk eshte prototype of objektit genta
*/
/*
///////////////////////// Object.create //////////////////////////////
//Le të krijojmë një objekt që duam të jetë prototipi i të gjithë objekteve të personit.
// 1. Le te krijojme nje klase me emri PersonProto

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  //Do krijojme ne new method
  init(firstName, birthYear) {
    this.firstName = firstName; //kjo fjala kyce this , tani do tregoje objektin e sara pasi ne e kemi thirrur ne menyre eksplicite init
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // aktualisht kemi nje prototype empty
steven.name = 'Steven';
steven.birthYear = 1996;
steven.calcAge();

console.log(steven.__proto__);
//output: {calcAge: ƒ}
// calcage: f calcAge()
// [[Prototype]]: Object

console.log(steven.__proto__ === PersonProto); //output: true

//Cfare ndodh ekzastesisht duhet qe te krijojme nje person tjeter
const sara = Object.create(PersonProto);
sara.init('Sara', 2000);
sara.calcAge();
//Pra, gjëja kryesore është që Object.create krijon një objekt të ri,dhe prototipi i atij objekti do të jetë objekti në të cilin kaluam.
*/

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
// MENYRA 1 - PROTOTYPE
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
/*



MENYRA 2 ME ES6 CLASSES
/*
console.log('--- PIKA 1 ---');
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  // Getter called speedUS
  get speedUS() {
    return this.speed / 1.6;
  }

  // Setter called speedUS
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
console.log(`Pika 2: ${bmw.make} is going at ${bmw.speedUS} mi/h`);
console.log(`Pika 3: ${bmw.make} is going at ${bmw.speed} km/h`);

mercedes.accelerate();
mercedes.accelerate();
console.log(`Pika 2: ${mercedes.make} is going at ${mercedes.speedUS} mi/h`);
console.log(`Pika 3: ${mercedes.make} is going at ${mercedes.speed} km/h`);
mercedes.brake();

console.log('--- PIKA 4 ---');
const audi = new Car('AUDI', 170);
audi.accelerate();
audi.accelerate();
audi.brake();
console.log(`Pika 2: ${audi.make} is going at ${audi.speedUS} mi/h`);
console.log(`Pika 3: ${audi.make} is going at ${audi.speed} km/h`);
*/

/////////////////////// Inheritance Between "Classes": Constructor Functions /////////////////////////////////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  //emri i funksionit eshte calcAge
  console.log(2023 - this.birthYear);
};

// building a constructor function for student
const Student = function (firstName, birthYear, course) {
  //si te shmangim dublikimet
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // e bejme si me poshte:
  //   Person(firstName, birthYear);//kshu nuk do funksionoje pasi eshte nje contructor funcion dhe duhet perpara operatori new

  // si ta zgjidhim??/ Ne mund te perdorim metoden "call" cka ben te mundur thirrjen e funksionit, ku do specifikojme fjlaen "this" si argument i pare i funksionit
  // ne duam që fjala "this" në këtë funksion të jetë thjesht fjala kyçe brenda këtij funksioni këtu, apo jo? Sepse siç e dime,
  //kjo fjalë kyçe do të jetë në fillim, ky objekt bosh që po krijohet nga operatori i ri. dhe ne kete objekt te ri ne duam te vendosim emrin dhe vitin e lindjes.
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//shtojme nje metode pasi kemi krijuar studentin genta
Student.prototype.introduce = function () {
  //emri i funksionit eshte introduce
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//creating a new student
const genta = new Student('Genta', 1996, 'Java Script');
console.log(genta);
genta.introduce(); //thirjja e funksionit
