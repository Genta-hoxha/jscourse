'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//////////////////// SYNCHRONOUS CODE ///////////////////
// as blocking
const p = document.querySelector('.p');
p.textContent = 'My name is Genta!';
alert('Text set!');
p.style.color = 'red';

// ~ Most code is synchronous
// ~ Synchronous code is executed line by line
// ~ Each line of code waits for previous line to finish
// ~ Long-running operations block code execution

//////////////////// ASYNCHRONOUS CODE ///////////////////
const p = document.querySelector('.p');
//Asynchronous is setTimeout
//Callback will run after timer
setTimeout(function () {
  p.textContent = 'My name is Genta!';
}, 5000);
p.style.color = 'red';

// ~ Asynchronous code is executed after a task that runs in the "background" finishes  (ne background shfaqet psh Image loading)
// ~ Asynchronous code is non-blocking
// ~ Execution doesn't wait for an asynchronous task to finish its work
// ~ Callback function alone do NOT make code asynchronous
[1, 2, 3].map(v => v * 2);

/*
Synchronous JavaScript 
1	Instruction in synchronous code executes in a given sequence. (Instruksioni në kodin sinkron ekzekutohet në një sekuencë të caktuar.)
2	Each operation waits for the previous operation to complete its execution.	(Çdo operacion pret që operacioni i mëparshëm të përfundojë ekzekutimin e tij.)
3	Most of the time JavaScript is used as Synchronous code.  (Shumicën e kohës JavaScript përdoret si kod sinkron.)


Asynchronous JavaScript
1. Instructions in asynchronous code can execute in parallel. (Instruksionet në kodin asinkron mund të ekzekutohen paralelisht.)
2. Next operation can occur while the previous operation is still getting processed. (Operacioni tjetër mund të ndodhë ndërsa operacioni i mëparshëm është ende duke u përpunuar.)
3. Asynchronous JavaScript is preferred in situations in which execution gets blocked indefinitely. (JavaScript asinkron preferohet në situatat në të cilat ekzekutimi bllokohet për një kohë të pacaktuar.)
*/
