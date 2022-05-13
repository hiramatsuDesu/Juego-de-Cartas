let imagenes = []
let seleccion = []

generarTablero()

function cargarImagenes(){
    imagenes = [
    '<img src="template/cachorron.jpg" width="80%">',
    '<img src="template/cahorro.jpg" width="80%">',
    '<img src="template/cocker.jpg" width="80%">',
    '<img src="template/diotima.jpg" width="80%">',
    '<img src="template/dog.jpg" width="80%">',
    '<img src="template/dogg.jpg" width="80%">',
    '<img src="template/esperando.jpg" width="80%">',
    '<img src="template/jugando.jpg" width="80%">',
    '<img src="template/lassie.jpg" width="80%">',
    '<img src="template/mascoto.jpg" width="80%">',
    '<img src="template/perrito.jpg" width="80%">',
    '<img src="template/gato.jpg" width="80%">',
    '<img src="template/puppi.jpg" width="80%">',
    ]
}

function generarTablero(){
    cargarImagenes()
    seleccion = []
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < 12; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionar(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${imagenes[i]}
                </div>
                <div class="cara superior" >
                  
                </div>
            </div>
        </div>
        `)
    }
    tarjetas.sort(()=>Math.random()-0.5);
    tablero.innerHTML = tarjetas.join(" ");
}

function seleccionar(i){
    let tarjeta = document.getElementById("tarjeta"+i)
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        seleccion.push(i)
    }
    if(seleccion.length == 1){
        deseleccionar(seleccion)
        seleccion = [];
    }
}

function deseleccionar(seleccion){

    setTimeout(() => {
        let trasera1 = document.getElementById("trasera"+seleccion[0])
        var cadena = trasera1.firstElementChild.src;
        let extraer = cadena.substr(-8)
        if(extraer == "gato.jpg"){
            trasera1.style.background = "red";
            setTimeout(()=> {letrero()}, 4000)
        }else{
            let tarjeta1 = document.getElementById("tarjeta" + seleccion[0])
            let tarjeta2 = document.getElementById("tarjeta" + seleccion[1])
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }
    },2000)
}

function letrero(){
    let tablero = document.getElementById("tablero");
    let tarjetas = []
    tarjetas.push(`
    <h1>
    <img src="estilos/trophy.png" width="10%"> 
        Ha ganado ! 
    <img src="estilos/trophy.png" width="10%">
    </h1>
    </br>
    <div class="area-tarjeta">
            
            <img src="template/gato.jpg" width="50%">
        </div>  
        `)
    tablero.innerHTML = tarjetas.join();
}