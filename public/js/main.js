console.log('JS CONECTADO')

document.addEventListener('click', e =>{
    if (e.target.dataset.short){
        const url = `https://localhost:5000/${e.target.dataset.short}`

        navigator.clipboard
        .writeText(url)
        .then(() =>{
            console.log("texto copiado");
        })
        .catch((error)=>{
            console.log("hubo un error",error);
        })
    }
})
