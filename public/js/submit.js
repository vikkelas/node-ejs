const form = document.querySelector('.myForm');
if(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const formData = new FormData(form);
        fetch('http://localhost:3001/', {
            method: "POST",
            body: formData
        }).then(r=>window.location.href = r.url)
    })
}
