 //  first solution
        const idVar = setInterval(() => {
            timer()
        }, 1000);

        function timer() {
            const dateVar = new Date();
            const time = dateVar.toLocaleTimeString();
            document.getElementById("clock").innerText ='Time : ' + time;
        };

        // second solution
        const dateTime = setInterval(perSecond, 1000);
        function perSecond() {
            const dt = new Date();

            document.getElementById("date-time").innerText = ' Date & Time : ' +
                        (  dt.getDate().toString()
  .padStart(2, '0'))
                + "." + ( (dt.getMonth() + 1).toString()
  .padStart(2, '0'))
                + "." +         (dt.getFullYear())
                + " " + ( dt.getHours().toString()
  .padStart(2, '0'))
                + ":" + ( dt.getMinutes().toString()
  .padStart(2, '0'))
                + ":" + ( dt.getSeconds().toString()
  .padStart(2, '0'))
        };

        