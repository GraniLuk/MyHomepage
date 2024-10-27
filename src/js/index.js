import '../scss/main.scss';

import moment from 'moment';

/* place your code below */

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Wrap all your DOM-dependent code in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('.navigation__checkbox');
  
  if (checkbox) {
    checkbox.addEventListener('change', () => {
      if(checkbox.checked) {
        document.documentElement.style.setProperty('--backgroud','#746d75');
        document.documentElement.style.setProperty('--navBackground','#2a324b');
        document.documentElement.style.setProperty('--color','#e1e5ee');
        document.documentElement.style.setProperty('--mainHeaderColor','#c7ccdb');
      } else {
        document.documentElement.style.setProperty('--backgroud','#92ce92');
        document.documentElement.style.setProperty('--navBackground','#1d9627');
        document.documentElement.style.setProperty('--color','#333');
        document.documentElement.style.setProperty('--mainHeaderColor','#7d1d3f');
      }
    });
  }

  // Add any other DOM-dependent code here
});

// Any code that doesn't depend on DOM elements can go here
