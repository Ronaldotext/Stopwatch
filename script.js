        const timer = document.getElementById("timer");
        const btn1 = document.getElementById("btn1");
        const btn2 = document.getElementById("btn2");
        const btn3 = document.getElementById("btn3");
        const btn4 = document.getElementById("btn4");

        let interval;
        let segundos = 0;
        let minutos = 0;
        let horas=0
        let running = false;

        function update() {
            if (running) {
                segundos++;
                if (segundos == 60) {
                    segundos = 0;
                    minutos++;
                }if(minutos == 60) {
                    minutos = 0;
                    horas++;
                }
            }
            timer.innerText = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
        }

        function formatoDosDigitos(valor) {
            return valor.toString().padStart(2, '0');
        }

        btn1.addEventListener("click", function () {
            if (!interval) {
                interval = setInterval(update, 1000);
                btn1.disabled = true;
                btn2.disabled = false;
                btn3.disabled = true;
                btn4.disabled = false;
                running = true;
            }
        });
      
    

        btn2.addEventListener("click", function () {
            clearInterval(interval);
            interval = undefined;
            btn1.disabled = false;
            btn2.disabled = true;
            btn3.disabled = false;
            btn4.disabled = false;
            running = false;
        });

        btn3.addEventListener("click", function () {
            if (!interval) {
                interval = setInterval(update, 1000);
                btn1.disabled = true;
                btn2.disabled = false;
                btn3.disabled = true;
                btn4.disabled = false;
                running = true;
            }
        });

        btn4.addEventListener("click", function () {
            clearInterval(interval);
            interval = undefined;
            segundos = 0;
            minutos = 0;
            timer.innerText = "00:00";
            btn1.disabled = false;
            btn2.disabled = true;
            btn3.disabled = true;
            btn4.disabled = false;
            running = false;
        });