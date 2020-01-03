'use strict'
// Inside a JavaScript file, called hijackGoogleLogo.js, create a function called hijackGoogleLogo
function hijackGoogleLogo(){  
// Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
let hyfImg = document.createElement('img');
hyfImg.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
 let googleLogo = document.getElementById('hplogo');
 googleLogo.replaceWith(hyfImg);
};
