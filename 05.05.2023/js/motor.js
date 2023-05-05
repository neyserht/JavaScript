document.querySelector("#btn").addEventListener("click", calcular);


function calcular(){
    
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let genero = document.querySelector("genero");

    let p1 = document.querySelector("#p1");

    if (altura == "" ) {
        p1.innerHTML = "Deben completar el campo altura";
    } else if (peso == ""){
        p1.innerHTML = "Deben completar el campo peso";
    } else{
        let resultado = peso/(altura*altura);
        p1.innerHTML= resultado;
    }
 

}