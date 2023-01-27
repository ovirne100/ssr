let añadealcaro = document.querySelector(".añade-alcarrito")
let iconcerrar = document.querySelector(".icon-cerrar")
let modal = document.querySelector(".modal")

añadealcaro.addEventListener('click',()=>{
    modal.showModal();
})

iconcerrar.addEventListener('click',()=>{
     modal.close();
})
/*
const listas1 = document.querySelector(".aaaaa")
const categorias = document.querySelector(".categoris")

const btnañadir = document.querySelector(".añade-alcarrito")
const pdp = document.querySelector(".product-detail")

const cerraricon = document.querySelector(".icon-cerrar")



listas1.addEventListener("click",licategorias)
function licategorias(){
categorias.classList.toggle("inactive")

}

btnañadir.addEventListener("click",pdpaañade)
function pdpaañade(){
    pdp.classList.toggle("inactive")
    pdp.classList.remove("inactive")
    
}

cerraricon.addEventListener("click",pdps)
function pdps(){
    pdp.classList.add("inactive")
    
}
*/
