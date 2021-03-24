console.clear();
// -------- DOM (Document Object Model) --------
// Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);

console.log(document.title);
document.title += ' - (DOM)';
console.log(document.title);


// Selectors
const family = document.getElementsByTagName('div');
console.log(family);

const grandParent = document.getElementById('grandparent');
console.log(grandParent);

const parents = document.getElementsByClassName('parent');
const parent1 = parents[0];
const parent2 = document.getElementsByClassName('parent')[1];
console.log(parent1, parent2);

const children = document.getElementsByClassName('child');
console.log(children);

let element = document.querySelector('div#grandparent>.parent>div.child#child4')
console.log(element);

parent1.style.backgroundColor = '#333';

/*Quiero hacer un forEach de family pero no es un array,
de modo que uso for...of*/
// for (let familyMember of family) {
//     console.log(familyMember);
// }

