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
                (("0" + dt.getDate()).slice(-2))
                + "." + (("0" + (dt.getMonth() + 1)).slice(-2)) + "." + (dt.getFullYear())
                + " " + (("0" + dt.getHours()).slice(-2))
                + ":" + (("0" + dt.getMinutes()).slice(-2))
                + ":" + (("0" + dt.getSeconds()).slice(-2))
        };