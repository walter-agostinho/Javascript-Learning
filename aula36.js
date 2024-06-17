const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnTransferir = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btnTransferir.addEventListener("click", (evt)=>{
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    cursoSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursoNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})