
function mostrarCalzas() {
    let url='http://localhost:3300/calzas';
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarDataCalzas(data))
    .catch(error => console.log(error))

    const mostrarDataCalzas=(data)=>{
        console.log(data)
        let cards="";
        for(var i=0; i<data.length; i++)
            {
                cards+=`<div class="col-md-3">
                <div class="card text-center">
                  <img class="card-img-top mx-auto" src=${data[i].imagen}>
                  <div class="card-body">
                    <h5 class="card-title">${data[i].precio}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary col-12 botoncard" data-bs-toggle="modal" data-bs-target="#modalCorrecto">Agregar al carrito</a>
                  </div>
                </div>
              </div>`
            }
            document.getElementById('calzas').innerHTML=cards;
    }
    
}

function buscarTipo() {
    let url= 'http://localhost:3300/calzas';
    let color=document.getElementById('color').value;
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarDataCalzas(data))
    .catch(error => console.log(error))

    const mostrarDataCalzas=(data)=>{
        console.log(data)
        let cards="";

        if (document.getElementById('color').value==0) {
            mostrarCalzas();
        }
        else{
        for(var i=0; i<data.length; i++){
            if (document.getElementById('color').value==data[i].color) {
            
                cards+=`<div class="col-md-3">
                <div class="card text-center">
                  <img class="card-img-top mx-auto" src=${data[i].imagen}>
                  <div class="card-body">
                    <h5 class="card-title">${data[i].precio}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary col-12 botoncard" data-bs-toggle="modal" data-bs-target="#modalCorrecto">Agregar al carrito</a>
                  </div>
                </div>
              </div>`   
            }
        }
        document.getElementById('calzas').innerHTML=cards;
        }
    }
    

}