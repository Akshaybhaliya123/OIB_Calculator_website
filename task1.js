
        function calculation() {
        var x = document.getElementById("output").value;
        var y = eval(x);
        document.getElementById("output").value = y;
       }
        function display(value) {
        document.getElementById("output").value += value;
        }
        function screenClear() {
        document.getElementById("output").value = "";
        }
        