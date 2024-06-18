const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const caixa1 = document.querySelector("#caixa1")

cursos.map((el, i)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+i)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    
    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "./trash.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })

    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})