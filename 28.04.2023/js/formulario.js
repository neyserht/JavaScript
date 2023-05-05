window.addEventListener("load", function(event)
{

    //Establecer una referencia de los elementos
    const b1 = document.getElementById("b1");
    
    // Asociar el elemento al evento y llamada a la funcion
    if(b1)
    {


        b1.addEventListener("click", function(event)
        {
            event.preventDefault();
            alert("test");
            console.log("test2");

        });
    }

});