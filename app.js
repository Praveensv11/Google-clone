const input = document.querySelector('.input-to-change')
const paragraph = document.querySelector('.para-to-change')

input.addEventListener('keyup' ,function(){
    paragraph.innerText= input.value
})