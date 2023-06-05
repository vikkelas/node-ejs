const form = document.querySelector('.myForm');
if(form){
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const id = e.currentTarget.dataset.id
        if(!id){
            const formData = new FormData(form);
            fetch('http://localhost:3001/', {
                method: "POST",
                body: formData
            }).then(r=>window.location.href = r.url)
        }else{
            const formData = new FormData(form);
            fetch(`http://localhost:3001/update/${id}`, {
                method: "PUT",
                body: formData
            }).then(r=>window.location.href = r.url)
        }
    })
}
