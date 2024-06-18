const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const caixa1 = document.querySelector("#caixa1")

cursos.map((el, i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+i)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})