    let length = { value: 0, s2: 0, h2: 0 };
    const session = document.getElementById("length");
    session.innerHTML = 0;

    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");
    const s1 = document.getElementById("s1");
    const s2 = document.getElementById("s2");

    length.loading = false; 
    function increment() {
       if (length.loading){return}
        length.value += 1;
        length.h2 = length.value;
        session.innerHTML = length.value;
        h2.innerHTML = length.h2;
        if (length.h2 > 9) {
            h1.innerHTML = "";
        }
    };


    function decrement() {
if (length.loading){return}
        if (length.value >= 1) {
            length.value -= 1;
        }
        length.h2 = length.value;
        session.innerHTML = length.value;
        h2.innerHTML = length.h2;
        if (length.h2 <= 9) {
            h1.innerHTML = 0;
        }
    }
    function decrement1() {
        if (length.value >= 1) {
            length.value -= 1;
        }
        length.h2 = length.value;
        session.innerHTML = length.value;
        h2.innerHTML = length.h2;
        if (length.h2 <= 9) {
            h1.innerHTML = 0;
        }
    }
    function start() {
        length.loading = true;
        length.t = setInterval(() => {
            if (length.h2 === 0 && length.s2 === 0) {
                document.getElementById("show").innerHTML = "time up!";

            } else if (length.h2 > 0) {
                document
                    .getElementById("show")
                    .appendChild(document.getElementById("timeshow"));
            };


             
            if (length.s2 > 9) {
                length.s1 = ''
                s1.innerHTML = length.s1;
            } else {
                length.s1 = '0'
                s1.innerHTML = length.s1;
                
            }
            length.s2 -= 1;
            if (length.s2 >= 0) {
                s2.innerHTML = length.s2;
            } else {
                s1.innerHTML = '';
                length.s2 = 59;
                s2.innerHTML = length.s2;
                decrement1();
            }
        }, 1000);
    }
    function stop() {
        length.loading = false;
        window.clearInterval(length.t);
    }
