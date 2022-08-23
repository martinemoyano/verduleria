// document.getElementById('txtNombreUsuario').value="jose";
// document.getElementById('txtClaveUsuario').value="12345";
// document.getElementById('txtEmailUsuario').value="jose@jose.com";
class Subscriptor
{
     constructor(obj) {
        this.nombre  = obj.nombre;
        this.clave  = obj.clave;
        this.email  = obj.email;
    }
}


let ArrayDeSubscriptores=[];

VerificaryCargar();

let botonRegistrar = document.getElementById("btnRegistrar")
botonRegistrar.onclick = () =>{

    let nombreIngresado = document.getElementById('txtNombreUsuario').value;
    let claveIngresada = document.getElementById('txtClaveUsuario').value;
    let emailIngresado = document.getElementById('txtEmailUsuario').value;

    /* validaciones */
    let objGenerico={nombre : nombreIngresado , clave : claveIngresada , email:emailIngresado}
    ArrayDeSubscriptores.push(new Subscriptor(objGenerico));


    Guardar()     
}
function Guardar()
{
    localStorage.setItem("ListadoSubscriptores",JSON.stringify( ArrayDeSubscriptores));
}

function VerificaryCargar()
{
    let arrayAuxiliar=JSON.parse(localStorage.getItem("ListadoSubscriptores"));

    if(arrayAuxiliar)
    {
        for(elemento of arrayAuxiliar )
        {
            ArrayDeSubscriptores.push(new Subscriptor(elemento));
            
        }
        let largo=arrayAuxiliar.length;
        console.log("tiene "+ largo +" elementos");
    }
    else
    {
        console.log("no hay registros");
    }
   

}