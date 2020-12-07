//Movement animation to happen
const card = document.querySelector('.card')
const container = document.querySelector('.container')

//items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

//Movement animation event
container.addEventListener('mousemove', (e) => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 25
	let yAxis = (window.innerHeight / 2 - e.pageY) / 25
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//animate in
container.addEventListener('mouseenter', (e) => {
	card.style.transition = 'none'
	//popout
	title.style.transform = 'translateZ(150px)'
	sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)'
	purchase.style.transform = 'translateZ(75px)'
	description.style.transform = 'translateZ(125px)'
	sizes.style.transform = 'translateZ(100px)'
})


//animate out
container.addEventListener('mouseleave', (e) => {
	card.style.transition = 'all 0.5s ease'
	card.style.transform = `rotateY(0deg) rotateX(0deg)`
	//back to normal
	title.style.transform = 'translateZ(0px)'
	sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
	purchase.style.transform = 'translateZ(0px)'
	description.style.transform = 'translateZ(0px)'
	sizes.style.transform = 'translateZ(0px)'
})
