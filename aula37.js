const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt) =>{
    console.log("clickou")
})

cursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})