 function suma() {
            let a = document.getElementById("sumaA").value;
            let b = document.getElementById("sumaB").value;
            let c = document.getElementById("sumaC").value;
            let wynik = parseInt(a) + parseInt(b) + parseInt(c);
            document.getElementById("wynik").innerHTML = "Suma: " + wynik;
        }

        function average() {
            let a = document.getElementById("averageA").value;
            let b = document.getElementById("averageB").value;
            let c = document.getElementById("averageC").value;
            let wynik = (parseInt(a) + parseInt(b) + parseInt(c)) / 3;
            document.getElementById("wynik").innerHTML = "Różnica: " + wynik;
        }

        function liczenie() {
            let a = document.getElementById("sumaA2").value;
            let b = document.getElementById("sumaB2").value;
            let c = document.getElementById("sumaC2").value;
            let wynik = parseInt(a) + parseInt(b) + parseInt(c);
            let wynik2 = parseInt(a) - parseInt(b) - parseInt(c);
            let wynik3 = parseInt(a) * parseInt(b) * parseInt(c);
            document.getElementById("wynik").innerHTML = "Suma: " + wynik + "<br>Różnica: " + wynik2 + "<br>Iloczyn: " + wynik3;
        }

        function pierwiastek() {
            let a = document.getElementById("pierwiastek").value;
            let wynik = Math.sqrt(a);
            document.getElementById("wynik").innerHTML = "Pierwiastek: " + wynik;
        }

        function poleKwadratu() {
            let a = document.getElementById("poleKwadratu").value;
            let wynik = a * a;
            document.getElementById("wynik").innerHTML = "Pole Kwadratu: " + wynik;
        }

        function poleProstopadloscianu() {
            let a = document.getElementById("poleProstopadloscianuA").value;
            let b = document.getElementById("poleProstopadloscianuB").value;
            let c = document.getElementById("poleProstopadloscianuC").value;
            let wynik = 2 * (a * b + a * c + b * c);
            document.getElementById("wynik").innerHTML = "PoleProstopadłościanu: " + wynik;
        }

        function poleKola() {
            let a = document.getElementById("poleKola").value;
            let wynik = a*a*Math.PI;
            let wynik2 = a*2*Math.PI;
            document.getElementById("wynik").innerHTML = "Pole: " + wynik + " Obwód: " + wynik2;
        }

        function benzyna() {
            let a = document.getElementById("benzyna").value;
            let wynik = 360/(100/8)*a;
            document.getElementById("wynik").innerHTML = "Koszt paliwa w złotych wyniesie: " + wynik;
        }

        function benzyna1() {
            let a = document.getElementById("benzynaA").value;
            let b = document.getElementById("benzynaB").value;
            let c = document.getElementById("benzynaC").value;
            let wynik = (b/(100/a))*c;
            document.getElementById("wynik").innerHTML = "Koszt jazdy w złotych wyniesie: " + wynik;
        }

        function lokata() {
            let a = document.getElementById("lokata").value;
            let wynik = a*0.08-(a*0.08*0.09);
            document.getElementById("wynik").innerHTML = "Lokata wynosi: " + wynik;
        }