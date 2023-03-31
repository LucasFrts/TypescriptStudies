const button = document.querySelector('button')

// const handleClick = (event:PointerEvent)=>{
//     console.log(event.pageX)
//     console.log(event.pageY)
// }
// const handleScroll = (event:Event)=>{
//     console.log(event)
// }
// const ativarMenu = (event:Event)=>{
//     if(event instanceof MouseEvent){
//         console.log(event.pageX)
//     }
//     if(event instanceof TouchEvent){
//         console.log(event.touches[0].pageX)
//     }
//     console.log(event)
// }

// button?.addEventListener('pointerdown', handleClick)

// window.addEventListener('scroll', handleScroll)

// document.documentElement.addEventListener('mousedown', ativarMenu)
// document.documentElement.addEventListener('touchstart', ativarMenu)
// window.addEventListener('keydown', ativarMenu)

// function handleClick2(this:HTMLButtonElement, event:MouseEvent){
//     console.log(this)
// }

// const handleClick2 = (event:Event)=>{
//     const elemento = event.currentTarget
//     if(elemento instanceof HTMLButtonElement){
//         console.log(elemento.innerText)
//     }
// }

// button?.addEventListener('click', handleClick2)

const navButton = document.getElementById('btn-mobile')
const handleMenu = (event:PointerEvent) => {
    const button = event.currentTarget
    const nav = document.getElementById('nav')
    
    if(button instanceof HTMLButtonElement && nav instanceof HTMLElement){
        if(nav.classList.contains("active")){
            button.setAttribute("aria-expanded", "false") 
            button.setAttribute("aria-label", "Abrir Menu") 
        }else{         
            button.setAttribute("aria-expanded", "true") 
            button.setAttribute("aria-label", "Fechar Menu") 
        }
        nav.classList.toggle("active")
    }
    console.log(button)

}
navButton?.addEventListener('pointerdown', handleMenu)