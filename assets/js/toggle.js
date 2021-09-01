const accordionItems = document.querySelectorAll('.c-politics__item')

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.c-politics__wrapper-title');
    accordionHeader.addEventListener('click', ()=>{
        console.log('click')
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){ 
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.c-politics__wrapper-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 50 + 'px'
        item.classList.add('accordion-open')

    }
}