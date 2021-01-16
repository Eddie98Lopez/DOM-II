// Your code goes here


const navLinks = document.querySelectorAll("nav a")

console.log(navLinks)

window.addEventListener('load',(e)=>{alert('The page loaded homie.')})

navLinks.forEach(item=>{item.addEventListener("mouseenter", (event)=> event.target.style.color = "green")})

navLinks.forEach(item=>{item.addEventListener("mouseleave", (event)=> event.target.style.color = "purple")})

navLinks.forEach(item=>{item.addEventListener("click",(event)=>event.target.preventDefault())})

const buttons = document.querySelectorAll('.btn')

console.log(buttons)

buttons.forEach(item=>item.addEventListener('dblclick', (e)=>{e.target.style.color = 'yellow'}))

window.addEventListener('resize', e=>{
   
    const intro =  document.querySelectorAll('.intro')
    intro[0].children[0].style.display = 'none'

})

window.addEventListener('keydown', event => {
    if (event.isComposing || event.keyCode === 40) {
      alert('you pressed a button')}
    })

window.addEventListener('wheel', (e)=>{
    alert('use the scrollbar NOT the wheel ese')
    e.stopPropagation;
})

window.addEventListener('scroll', e=>{

    const intro =  document.querySelectorAll('.intro')
    intro[0].children[1].style.visibility = 'hidden'

})

window.addEventListener('keyup', e => {
    if (e.isComposing || e.keyCode === 38) {

    const intro =  document.querySelectorAll('.intro')
    intro[0].children[1].style.visibility = 'visible'}

})