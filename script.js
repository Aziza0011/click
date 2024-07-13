let plyusbtn = document.querySelector('#btn1')
let minusbtn = document.querySelector('#btn2')
let h1 = document.querySelector('h1')

let refresh = ()=>{
h1.textContent=count
}

let count = 0 


plyusbtn.addEventListener('click',()=>{
    count++ 
    refresh()
})

minusbtn.addEventListener('click',()=>{
    count-- 
    refresh()
})