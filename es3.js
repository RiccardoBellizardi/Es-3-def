  
<html>
  <head>
    <title>es 2</title>
  </head>
  <body>
    <h1 id="sksk">Es3</h1>
    <p>Pagina calcolatrice.</p>

    <div id="div1" style="background-color: rgb(41, 255, 87)">
      <h2>calcolatrice</h2>
    </div>

    <br /><br />

    <label for="num1">numero1:</label>
    <input type="number" id="num1" name="num1" /><br /><br />
    <label for="num2">numer2:</label>
    <input type="number" id="num2" name="num2" /><br /><br />
    <button id="btn1">+</button>
    <button id="btn2">-</button>
    <button id="btn3">/</button>
    <button id="btn4">*</button>
    <br />
    
<table id="tabella">
    <tr><td>Primo Numero </td><td> Operatore </td><td> Secondo Numero </td><td> Risultato </td></tr>
</table>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
      $("#btn1").click(function () {
        calcola("+");
      });
      $("#btn2").click(function () {
        calcola("-");
      });
      $("#btn3").click(function () {
        calcola("/");
      });
      $("#btn4").click(function () {
        calcola("*");
      });
      
      function calcola(segno) {
        var n1 = parseInt($("#num1").val());
        var n2 = parseInt($("#num2").val());
        var risultato;
        switch (segno) {
          case "+":
            risultato = n1 + n2;
            break;
          case "-":
            risultato = n1 - n2;
            break;
          case "/":
            risultato = n1 / n2;
            break;
          case "*":
            risultato = n1 * n2;
            break;
        }
        
        $("#tabella").append("<tr><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>"+risultato+"</td></tr>");
      }
      //var isco = $("body").append($("<h3>wow</h3>"));
    </script>
    
    
    </table>
    <style>
        table {
        border-collapse:collapse
        }
        td, th {
        border:1px solid #ddd;
        padding:8px;
        }
        </style>
  </body>
</html>