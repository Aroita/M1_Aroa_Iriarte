
 $(function () {
          $(".bt-delet").click(function() {

            if(confirm("¿estas seguro?")) {
              $(this).parents('tr').hide();

            }
        });

        });

/* eliminar filas con botton borrar
function eliminar(id){
  var row = document.getElementById("");

  document.getElementById("table").deleteRow(row);
}
*/







 
