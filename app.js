const show = document.querySelector('#show')
const hidden = document.querySelector('#hidden')
const rasm = document.querySelector('#rasm1')

show.addEventListener('click',function () {
    rasm.setAttribute('src','rasm2.jpg')
})
hidden.addEventListener('click',function () {
    rasm.setAttribute('src','rasm1.jpg')
})
 