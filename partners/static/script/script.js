document.querySelectorAll('.collapsible_button').forEach(button => {
    button.addEventListener('click', () => {
        const collapsibleContent = button.nextElementSibling;
        button.classList.toggle('collapsible_button--active');
        if(button.classList.contains('collapsible_button--active')){
            collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + 'px';
        } else{
            collapsibleContent.style.maxHeight = 0;
        }
    })
})