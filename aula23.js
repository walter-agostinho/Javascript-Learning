function soma(...valores){
    let res=0;
    for(let i=0; i<valores.length; i++){
        res += valores[i];
    }
    return res;
}

console.log(soma(1,2))