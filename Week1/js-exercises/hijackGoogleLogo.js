'use strict'
// Inside a JavaScript file, called hijackGoogleLogo.js, create a function called hijackGoogleLogo
function hijackGoogleLogo(){  
// Find out how to select the element that contains the Google logo, and store it in a variable
    let googleLogo = document.getElementById('hplogo');
// Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
let hyfImg = document.createElement('img');
hyfImg.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
 let googleLogo = document.getElementById('hplogo');
 googleLogo.replaceWith(hyfImg);
};
