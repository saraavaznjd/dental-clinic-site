const $ = document
const menuList = $.querySelector('.menu-list')
const menuIcon = $.querySelector('.menu-icon')
const questionBoxArrows = $.querySelectorAll('.question-box_arrow')
const questionBoxCaptions = $.querySelectorAll('.question-box_caption')
const menuIconSvg = $.querySelector('.menu_icon')
const menuCloseSvg = $.querySelector('.menu_close')

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('menu-list--active')
    menuIconSvg.classList.toggle('menu-icon--hide')
    menuCloseSvg.classList.toggle('menu-close--hide')
})


questionBoxArrows.forEach(questionBoxArrow => {
    questionBoxArrow.addEventListener('click', event => {
        console.log(event.target.parentElement)
        event.target.parentElement.nextElementSibling.classList.toggle('question-box_caption--show')
        event.target.parentElement.classList.toggle('question-box_wrapper--color')
        event.target.classList.toggle('question-box_arrow--hide')
        if(event.target.nextElementSibling){
            event.target.nextElementSibling.classList.toggle('question-box_arrow--hide')
        }else{
            event.target.previousElementSibling.classList.toggle('question-box_arrow--hide')
        }
        
       
    })
})
